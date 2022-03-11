import React, { useState, useEffect } from "react";
import './orderResumeSearch.css';
import { OrderResume } from '../orderResume/orderResume'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"




export const OrderResumeSearch = () => {

    const [orderId, setOrderId] = useState("");
    const [order, setOrder] = useState();
    const optionsCalendarioLargo = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    const handleInputChange = (e) => {
        setOrderId(e.target.value)
console.log(orderId.length)
console.log(orderId)
    }

    useEffect(() => {
        if (orderId.length === 13) {
            console.log("entro a datos")
            const getOrder = async () => {
                const docRef = doc(db, "orders", orderId);
                const dataref = await getDoc(docRef);
                const docData = {
                    id: orderId,
                    name: dataref.data().buyer.name,
                    phone: dataref.data().buyer.phone,
                    email: dataref.data().buyer.email,
                    items: dataref.data().items.map((item) => ({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        quantity: item.quantity
                    })),
                    fechaOrder: dataref.data().fechaOrder.toDate().toLocaleDateString("es-AR", optionsCalendarioLargo),
                    itemscount: dataref.data().itemscount,
                    total: dataref.data().total
                };
                console.log(docData)
                setOrder(docData)
            }
            getOrder();
        }
    }, [orderId]);




    return (
        < div >
            <div>
                <form className="form-row-search">
                    <div className="form-input" >
                        <input type="search" placeholder="Ingrese Orden Id" className="input-search" onChange={handleInputChange} name="search"></input>
                    </div>
                </form>
            </div>
            {
                order? (
                    <OrderResume order={order} />
                ) : (
                    <h1>Ingrese una Orden!!!!!!</h1>
                )
            }
        </div >
    )
};