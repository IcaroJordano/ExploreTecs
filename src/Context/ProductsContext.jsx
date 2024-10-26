import { createContext, useContext, useState } from "react";

export const ProductsContext = createContext()

export default function ProductsProvider({children}) {
    const [number,setNumber]=useState(1)
    return (
        <ProductsContext.Provider value={{number,setNumber}}>
            {children}
        </ProductsContext.Provider>
    )

}