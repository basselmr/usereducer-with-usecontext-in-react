import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
//import { Button } from "bootstrap";



const Cart = () => {
    //const { Count, CartItems } = useContext(CartContext)
    const { Cart } = useContext(CartContext)

    return (
        <>
            <h1>This is the Cart Page</h1>
            {
                Cart.cartItems.map((itm, index) => {
                    //console.log(itm)
                    return <div key={index}>
                        <div >
                            ID :{itm.id}
                            title: {itm.title}
                            Price: {itm.price}
                        </div>
                    </div>
                })
            }

            <h2>Total Items in Cart {Cart.count}</h2>
        </>




    )
}
export default Cart;