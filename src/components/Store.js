import React from "react";
import { useEffect, useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "./ProductCard/ProductCard";

const Store = () => {
    const { products, setProducts } = useContext(ProductsContext)
    //const { products, setProducts } = useProducts()
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setProducts(data);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
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