import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../../Context/ProductsContext"

import { ExibirProdutos } from "../../components/ExibirProdutos"

export function Home() {
    const Context = useContext(ProductsContext)
    const [valor,setValor]=useState("inicial")
    useEffect(() =>{
        if ((Context.number[0])!='oi'){
            setValor(Context.number[0].name)
        }
        else{
            setValor('calma')
    }
    },[Context.number])
    // console.log(valor.number)
    function mudar() {
        let novoValor=11
        let novoObjeto=Context.number
        novoObjeto[0].preco=111
        Context.number[0].preco=111
        // localStorage()
        // console.log(novoObjeto)
        console.log(Context.number)
        localStorage.setItem('dataApi',JSON.stringify(novoObjeto))
    }
    // mudar()
    return (
        <section>
            <h1>Home{valor}</h1>
            <button onClick={mudar}>a</button>
            {/* <h2a>Home {Context.number[0].preco&&Context.number[0].preco}</h2> */}
            {/* <h1>Home</h1>
            <button >Render Products {Context.number.name}</button> */}
            <div>

            </div>
        </section>
    )
}