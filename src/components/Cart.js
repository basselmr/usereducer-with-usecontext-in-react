import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Button } from "bootstrap";



const Cart = () => {
    const { Count, setCount, cartItems, setCartItems } = useContext(CartContext)

    /*const onclickHandler = () => {
        setCount(Count + 1)
    }*/
    const CartItems = () => {


    }


    return (
        <>

            {cartItems.map(itm => {
                console.log(itm)
                return <><div>ID :{itm.id} title: {itm.title} Price: {itm.price} </div></>
            })}

            <h1>This is the Cart Page</h1>
            <h2>Count {Count}</h2>
            <button onClick={CartItems} >Increment</button>
        </>




    )
}
export default Cart;