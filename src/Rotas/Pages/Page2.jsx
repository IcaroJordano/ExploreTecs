import { useContext, useState } from "react"
import { ProductsContext } from "../../Context/ProductsContext"

export function Page2() {
    const Context=useContext(ProductsContext)

    return(
        <section>
            <h1>Page2 {Context.number}</h1>
            {/* <button>Render Products</button> */}
            <div>
                
            </div>
        </section>
    )
}