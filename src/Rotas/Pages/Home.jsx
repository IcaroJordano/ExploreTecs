import { useContext, useState } from "react"
import { ProductsContext } from "../../Context/ProductsContext"

import { ExibirProdutos } from "../../components/ExibirProdutos"

export function Home() {
    const Context = useContext(ProductsContext)
    // const [valor,setValor]=useState(Cont)
    // console.log(valor.number)

    ExibirProdutos()
    return (
        <section>
            <h1>Home {Context.number[1].name}</h1>
            {/* <h2>Home {Context.number[0].preco&&Context.number[0].preco}</h2> */}
            {/* <h1>Home</h1>
            <button >Render Products {Context.number.name}</button> */}
            <div>

            </div>
        </section>
    )
}