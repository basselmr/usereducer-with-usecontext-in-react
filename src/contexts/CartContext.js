import React from "react";
import { createContext, useState } from "react";
export const CartContext = createContext([])
export const Cartprovider = ({ children }) => {
    const [Count, setCount] = useState(0)
    const [cartItems, setCartItems] = useState([])
    return (
        <CartContext.Provider value={{ Count, setCount, cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    )

}