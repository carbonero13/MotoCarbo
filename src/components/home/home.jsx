import React, { useEffect, useState } from "react";
import './home.css';
import { Link } from 'react-router-dom';
import { ItemListHome } from "../itemListHome/itemListHome";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase"


export const Home = () => {

  const [products, setProducts] = useState(undefined);
  const [error, setError] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {

      try {
        const { docs } = await getDocs((collection(db, "items")));
        const data = docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        })
        let rValue = []
        let arrayrand = []
        for (let index = 0; arrayrand.length < 3; index++) {
          let rand = ~~(Math.random() * data.length)
          rValue.push(data[rand])
          arrayrand = rValue.filter((ele, pos) => rValue.indexOf(ele) === pos)
        }
        setProducts(arrayrand)
      } catch (error) {
        setError(error)
      } finally {
        setIsloading(false)
      }
    };
    if (isLoading) {
      getProducts()
    }
  }, [])


  return (

    <div className="home-hero-text">
      <h3>Bienvenido</h3>
      <Link className="home-btn-catalog" to={`/itemListContainer`}>Catalogo de Motos</Link>
      <h3>Carbo Concecionario Oficial Benelli</h3>
      <div className="container-list-home">
        {isLoading ? (
          <h1>Cargando!</h1>
        ) : error ? (
          <h1>{error}</h1>
        ) : products ? (
          <ItemListHome products={products} />
        ) : (
          <h1>No se encontraron productos!!!!!!</h1>
        )
        }
      </div>
    </div>

  )
}






