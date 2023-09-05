import React from "react";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "./ProductCard/ProductCard";



const Store = () => {
    const { products, setProducts } = useContext(ProductsContext)
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])




    return (
        <div style={{
            display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: "10px"
        }} >
            {
                products.map(itm => {
                    return (
                        <ProductCard key={itm.id} id={itm.id} image={itm.image} title={itm.title} Price={itm.price} Discription={itm.description} Category={itm.category} />
                    )
                })
            }
        </div >
    )
}
export default Store;