import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import("./style.css")
const ProductCard = (props) => {
    const { Count, setCount, cartItems, setCartItems } = useContext(CartContext)

    const onclickHandler = () => {
        setCount(Count + 1)
        setCartItems([...cartItems, { id: props.id, title: props.title, price: props.Price, image: props.image }])
        console.log(props.id)
    }

    return (
        <>
            <div className="container">
                <div className="images">
                    <img src={props.image} />
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