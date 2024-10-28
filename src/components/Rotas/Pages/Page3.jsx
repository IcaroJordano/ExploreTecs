import { useContext, useState } from "react"
import { ProductsContext } from "../../../Context/ProductsContext"

export function Page3() {
    const Context = useContext(ProductsContext)

    return (
        <section>
            <h1>Page3 {Context.number[0].name}</h1>
            <h2>Page3 {Context.number[0].preco}</h2>
            <div>

            </div>
        </section>
    )
}