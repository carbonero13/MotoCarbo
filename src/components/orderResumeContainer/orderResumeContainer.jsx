import React, { useState, useEffect } from "react";
import './orderResumeContainer.css';
import { useParams } from "react-router-dom";
import { OrderResume } from '../orderResume/orderResume'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"




export const OrderResumeContainer = () => {

    const { orderId } = useParams();
    const [order, setOrder] = useState();


    useEffect(() => {
        const getOrder = async () => {
            const docRef = doc(db, "items", orderId);
            const dataref = await getDoc(docRef);
            const data = { id: dataref.id, ...dataref.data() }
            console.log(dataref.data().total)
            setOrder(dataref.data().total)
        }
       
        getOrder();
    }, [orderId]);




    return (
        < div >
           <OrderResume order={order} /> 
        </div >
    )
};