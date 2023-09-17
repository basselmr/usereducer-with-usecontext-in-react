import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import("./style.css")
const ProductCard = (props) => {
    //const { Count, setCount, CartItems, setCartItems, Cart, dispatch } = useContext(CartContext)
    const { dispatch } = useContext(CartContext)
    const onclickHandler = () => {
        //setCount(Count + 1)
        //setCartItems([...CartItems, { id: props.id, title: props.title, price: props.Price, image: props.image }])
        //console.log(props.id)
        dispatch({ type: "addToCart", payload: { id: props.id, title: props.title, price: props.Price, image: props.image } })
    }

    return (
        <>
            <div className="container">
                <div className="images">
                    <img src={props.image} alt="none" />
                </div>
                <div className="product">
                    <p>{props.Category}</p>
                    <h1>{props.title}</h1>
                    <h2>${props.Price}</h2>
                    <p className="desc">{props.Discription}</p>
                    <div className="buttons">
                        <button className="add" onClick={onclickHandler}>Add to Cart</button>
                        <button className="like"><span>♥</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard