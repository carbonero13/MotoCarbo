import React, { useContext, Fragment, useState, useEffect } from "react";
import './cart.css';
import { CartItem } from "../cartItem/cartItem";
import { CartContext } from "../../context/cartContext";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Timestamp, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase"


export const Cart = ({ products }) => {

  const { clearAllCart, costTotalCart, cartQuantityProduct, itemsCart } = useContext(CartContext)
  const [datosValidos, setDatosValidos] = useState(false)
  let navigate = useNavigate();

  const [buyer, setbuyer] = useState({
    name: '',
    phone: '',
    email: '',
    email2: ''
  })

  function handleClick(Orderid) {
    clearAllCart();
    navigate("/orderResumeContainer/"+Orderid);
  }


  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setbuyer({
      ...buyer,
      [event.target.name]: event.target.value
    })
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
    } else {
      setDatosValidos(true)
    }

  }

  function mostrarAlerta(text) {
    Swal.fire({
      title: "Oops...!",
      text: "Por favor ingresa nuevamente tu" + text,
      icon: "warning",
    });;
  }


  /*  const enviarDatos = async (e) => { */
  /*  e.preventDefault() */
  /*   validarDatos(buyer)
    let date = new Date().getTime();
    console.log("fecha: " + date) */
  /*    if (datosValidos) {
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
     } */
  /* function validarDatos(buyer) {
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
  } */


  /*  } */

  useEffect(() => {

    const enviarDatos = async () => {
      let date = new Date().getTime();
      let idOrder = date.toString()
      console.log("idOrder: " + date)
      if (datosValidos === true) {
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

        
      
        /*   const docRef = await addDoc(collection(db, "orders"), docData); */
  /*       console.log("Document written with ID: ", docRef.id);
        Swal.fire({
          title: "Felicitaciones...!",
          text: "Tu Orden #" + docRef.id + " generada, en breve con contactaremos con",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            handleClick()
          }
        }) */
        const docRef = await setDoc(doc(db, "orders", idOrder), docData)
      /*  console.log("Document written with ID: ", docRef.id); */
        Swal.fire({
          title: "Felicitaciones...!",
          text: "Tu Orden #"+ idOrder+ " generada, en breve nos contactaremos",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            handleClick(idOrder)
          }
        })
      }
    };
    enviarDatos()
  }, [datosValidos])

  return (



    <div className="Cart-Container-body">

      {products.length ? (
        <Fragment>

          <div className="Cart-Container">
            <div className="container-form-1 ">
              <h3>Informacion de Contacto</h3>
              <p>Ingrese sus datos para finalizar la compra.</p>
              {/* <form className="form-row" onSubmit={enviarDatos}> */}
              <form className="form-row">
                <div className="form-input" >

                  <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="name"></input>
                </div>
                <div className="form-input">
                  <input type="tel" placeholder="Telefono" className="form-control" onChange={handleInputChange} name="phone"></input>
                </div>
                <div className="form-input">
                  <input type="email" placeholder="Email" className="form-control" onChange={handleInputChange} name="email"></input>
                </div>
                <div className="form-input">
                  <input type="email" placeholder="Confirme email" className="form-control" onChange={handleInputChange} name="email2"></input>
                </div>
              </form>
              <ul>
              </ul>
            </div>
            <div className="container-form-3 "></div>
            <div className="container-form-2 ">
              <div className="Header">
                <h3 className="Heading">Resumen de compra</h3>
                <h5 className="Action" onClick={() => clearAllCart()} >Eliminar todo</h5>
              </div>
              <div>
                {
                  products.map((product) => <CartItem key={product.id} {...product} />)
                }
              </div>
              <hr></hr>
              <div className="checkout">
                <div className="total">
                  <div>
                    <div className="Subtotal">Sub-Total</div>
                    <div className="items">{cartQuantityProduct} items</div>
                  </div>
                  <div className="total-amount">$ {new Intl.NumberFormat('es-ES').format(costTotalCart)}</div>
                </div>
              </div>
            </div>
          </div>
          <div>

            <button className="button-checkout" onClick={() => validarDatos(buyer)} >Confirmar Compra</button>

          </div>
        </Fragment>
      ) : (
        <h1>Su carrito esta Vacio</h1>
      )
      }

    </div >
  )
}