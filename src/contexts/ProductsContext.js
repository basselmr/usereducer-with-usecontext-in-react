import React, { useContext } from "react";
import { createContext, useState } from "react";
export const ProductsContext = createContext([])
export const Productsprovider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])


    return (
        <ProductsContext.Provider value={{ products, setProducts, cart, setCart }}>
            {children}
        </ProductsContext.Provider>
    )

}

export const useProducts = () => useContext(ProductsContext);