import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
//import { type } from "@testing-library/user-event/dist/type";
//import { Button } from "bootstrap";



const Cart = () => {
    //const { Count, CartItems } = useContext(CartContext)
    const { Cart, dispatch } = useContext(CartContext)
    const IncrementOnClickHandler = (ItmID) => {
        dispatch({ type: "QTY_Increment", payload: ItmID })

    }
    const DecrementOnClickHandler = (ItmID) => {
        dispatch({ type: "QTY_Decrement", payload: ItmID })

    }
    const DeleteOnClickHandler = (ItmID, ItmQty) => {
        dispatch({ type: "removeFromCart", payload: { ItemId: ItmID, ItemQTY: ItmQty } })
    }



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
                        <div style={{ display: "inline" }}>
                            <button style={{ display: "inline" }} onClick={() => IncrementOnClickHandler(itm.id)} >+</button>
                            <div style={{ display: "inline" }}>QTY : {itm.qty}</div>
                            <button onClick={() => DecrementOnClickHandler(itm.id)} >-</button>
                        </div>
                        <div>
                            <button onClick={() => DeleteOnClickHandler(itm.id, itm.qty)}>DELETE</button>
                        </div>
                    </div>
                })
            }

            <h2>Total Items in Cart {Cart.count}</h2>
        </>




    )
}
export default Cart;