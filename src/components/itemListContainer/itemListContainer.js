import React, { useState, useEffect } from "react";
import './itemListContainer.css';
import { ItemList } from '../itemList/itemList'
import { NavBarCategory } from '../navBarCategory/navBarCategory'
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase"


export const ItemListContainer = () => {


    const { categoryKey } = useParams();
    const [products, setProducts] = useState(undefined);
    const [error, setError] = useState();
    const [isLoading, setIsloading] = useState();


    useEffect(() => {

            const getProducts = async () => {
                try {
                    setIsloading(true)
                    const { docs } = await getDocs((collection(db, "items")));
                    const data = docs.map((doc) => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        }
                    })
                   
                    if (categoryKey !== undefined) {
                        const fil = data.filter(e => e.categoryKey === categoryKey)
                        setProducts(fil)
                    } else {
                        setProducts(data)
                    }
        
                } catch (error) {
                    setError(error)
                } finally {
                    setIsloading(false)
                }
            };
            getProducts()
      }, [categoryKey])

    return (

        <div className="container-list">
            <NavBarCategory />
            {isLoading ? (
                <h1>Cargando!</h1>
            ) : error ? (
                <h1>{error}</h1>
            ) : products ? (
                <ItemList products={products} />
            ) : (
                <h1>No se encontraron productos!!!!!!</h1>
            )
            }
        </div>
    )
}