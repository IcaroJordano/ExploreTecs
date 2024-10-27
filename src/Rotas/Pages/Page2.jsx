import { useContext, useState } from "react"
import { ProductsContext } from "../../Context/ProductsContext"

export function Page2() {
    const Context=useContext(ProductsContext)

    return(
        <section>
            <h1>Page2 {Context.number[0].name}</h1>
            <h2>Page2 {Context.number[0].preco}</h2>
            <div>
                
            </div>
        </section>
    )
}