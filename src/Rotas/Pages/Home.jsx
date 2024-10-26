import { useContext, useState } from "react"
import { ProductsContext } from "../../Context/ProductsContext"

export function Home() {
    const Context=useContext(ProductsContext)
    // const [valor,setValor]=useState(Cont)
    // console.log(valor.number)
    return(
        <section>
            <h1>Home</h1>
            <button onClick={()=>{
                Context.setNumber(Context.number+1)
            }} >Render Products {Context.number}</button>
            <div>
                
            </div>
        </section>
    )
}