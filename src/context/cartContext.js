import { createContext, useState } from "react";

const initialCartContext = []

export const CartContext = createContext(initialCartContext)


export const CartProvider = ({ children }) => {

    const [itemsCart, setItemsCart] = useState([])
    const [costTotalCart, setCostTotalCart] = useState(0);
    const [cartQuantityProduct, setCartQuantityProduct] = useState(0);


    const addItemCart = (item, quantity) => {
        isInCart(item.id)
            ? setItemsCart(
                itemsCart.map((product) => {
                    if (product.id === item.id) {
                        product.quantity += quantity
                    }
                    return product;
                })
            )
            : setItemsCart([
                ...itemsCart,
                { id: item.id, title: item.title, price: item.price, quantity: quantity, image: item.image },
            ]);
        setCartQuantityProduct(cartQuantityProduct + quantity)
        setCostTotalCart(costTotalCart + (quantity * item.price))
    };

    let totalCountCart = 0;






    const removeItemCart = (itemId, quantity, price) => {
        const filterCart = itemsCart.filter(e => e.id !== itemId)
        setItemsCart(filterCart);
        const newCostCart = costTotalCart - (quantity * price)
        setCostTotalCart(newCostCart)
    };

    const clearAllCart = () => {
        setItemsCart([])
    };

    const isInCart = (itemId) => {
        const findCart = itemsCart.find(e => e.id === itemId)
        return findCart
    };


    return (
        <CartContext.Provider
            value={{
                itemsCart,
                costTotalCart,
                addItemCart,
                removeItemCart,
                clearAllCart,
                totalCountCart,
                cartQuantityProduct
            }}>
            {children}

        </CartContext.Provider>
    )
}