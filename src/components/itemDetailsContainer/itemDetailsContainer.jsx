import React, { useState, useEffect } from "react";
import './itemDetailsContainer.css';
import { useParams } from "react-router-dom";
import { ItemDetails } from '../itemDetails/itemDetails'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"




export const ItemDetailsContainer = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState();


    useEffect(() => {
        const getProduct = async () => {
            const docRef = doc(db, "items", productId);
            const dataref = await getDoc(docRef);
            const data = { id: dataref.id, ...dataref.data() }
            setProduct(data)
        }
        getProduct();
    }, [productId]);




    return (
        < div >
            <ItemDetails product={product} />
        </div >
    )
};