import React, { useState, useEffect } from "react";
import './orderResumeContainer.css';
import { useParams } from "react-router-dom";
import { OrderResume } from '../orderResume/orderResume'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"




export const OrderResumeContainer = () => {

    const { orderId } = useParams();
    const [order, setOrder] = useState();
    const optionsCalendarioLargo = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    useEffect(() => {
        const getOrder = async () => {
            const docRef = doc(db, "orders", orderId);
            const dataref = await getDoc(docRef);
            console.log(dataref.data().total)
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
    }, [orderId]);




    return (
        < div >
            {
                order ? (
                    <OrderResume order={order} />
                ) : (
                    <h1>No se encontro orden!!!!!!</h1>
                )
            }
        </div >
    )
};