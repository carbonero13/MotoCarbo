import React, { Fragment, useState, useContext } from 'react';
import './userForm.css'
import Swal from 'sweetalert2'
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebase"
import { CartContext } from "../../context/cartContext";
import { useNavigate} from 'react-router-dom';

export const UserForm = () => {
    const [datosValidos, setDatosValidos] = useState(false)
    const { costTotalCart, cartQuantityProduct, itemsCart } = useContext(CartContext);
    let navigate = useNavigate();
  /*   const [itemsOrder, setItemsOrder] = useState() */
    const [buyer, setbuyer] = useState({
        name: '',
        phone: '',
        email: '',
        email2: ''
    })

    function handleClick() {
        navigate("/orderResume/:OrderId");
      }

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setbuyer({
            ...buyer,
            [event.target.name]: event.target.value
        })
    }

/*     useEffect(() => {
      
        enviarDatos();
    }, [productId]); */

    
    const enviarDatos = async (e) => {
        e.preventDefault()
        validarDatos(buyer)
        let date = new Date().getTime();
        console.log("fecha: " + date)
        if (datosValidos) {
            const docData = {

                buyer: {
                    name: buyer.name,
                    phone: buyer.phone,
                    email: buyer.email,

                },
                items: itemsCart.map((item) => ({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    quantity: item.quantity
                })),
                fechaOrder: Timestamp.now(),
                itemscount: cartQuantityProduct,
                total: costTotalCart
            };



            const docRef = await addDoc(collection(db, "orders"), docData);
            console.log("Document written with ID: ", docRef.id);
            Swal.fire({
                title: "Oops...!",
                text: "HAsta aca vamos bien",
                icon: "success",
            }).then((result) => {
               
                 if (result.isConfirmed) {
                    handleClick()
                } 
            })
        }

    }

    function validarDatos(buyer) {
        const mensaje = []
        if (buyer.email !== buyer.email2) {
            mensaje.push(" Correo")
        }
        if (buyer.name.length <= 2) {
            mensaje.push(" Nombre")
        }
        if (buyer.phone.length <= 7) {
            mensaje.push(" Telefono")
        }
        if (mensaje.length > 0) {
            mostrarAlerta(mensaje.toString())
        }
        setDatosValidos(true)
    }

    function mostrarAlerta(text) {
        Swal.fire({
            title: "Oops...!",
            text: "Por favor ingresa nuevamente tu" + text,
            icon: "warning",
        });;
    }

    /* const Home = ({ loggedIn }) => {
        return loggedIn ? <Redirect to='/profile' /> : <Redirect to='/registrar' />;
    }; */

    return (
        <div className="container-list">
            <div className="Cart-Container-body">
                <div className="Cart-Container">
                    <Fragment>
                        <h1>Datos de contacto</h1>
                        <form className="form-row" onSubmit={enviarDatos}>
                            <div className="form-input" >

                                <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="name"></input>
                            </div>
                            <div className="form-input">
                                <input type="tel" placeholder="Telefono" className="form-control" onChange={handleInputChange} name="phone"></input>
                            </div>
                            <div className="form-input">
                                <input type="email" placeholder="email" className="form-control" onChange={handleInputChange} name="email"></input>
                            </div>
                            <div className="form-input">
                                <input type="email" placeholder="confirme email" className="form-control" onChange={handleInputChange} name="email2"></input>
                            </div>
                            <button type="submit" className="btn-carrito">Confirmar Compra</button>
                        </form>
                        <ul>
                        </ul>
                    </Fragment>
                </div>
            </div>
        </div >
    );
}
