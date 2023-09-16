import React from "react";
import { createContext, useState, useReducer } from "react";
import { cartReduserFunction } from "../reducer/cartReduserFunction";
export const CartContext = createContext([])
export const Cartprovider = ({ children }) => {
    const [Count, setCount] = useState(0)
    const [CartItems, setCartItems] = useState([])
    const [Cart, dispatch] = useReducer(cartReduserFunction, { count: 0, cartItems: [] })
    return (
        <CartContext.Provider value={{ Count, setCount, CartItems, setCartItems, Cart, dispatch }}>
            {children}
        </CartContext.Provider>
    )

}