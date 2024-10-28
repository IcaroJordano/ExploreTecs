import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../../Context/ProductsContext"

import { ExibirProdutos } from "../../components/ExibirProdutos"
import { NewCard } from "./NewCard"
import { NewText } from "../../components/NewCard/NewcardText"

export function Home() {
    const Context = useContext(ProductsContext)
    const [valor, setValor] = useState("inicial")
    useEffect(() => {
        if ((Context.number[0]) != 'oi') {
            setValor(Context.number[0].name)
        }
        else {
            setValor('calma')
        }
    }, [Context.number])
    // console.log(valor.number)
    function mudar() {
        let novoValor = 11
        let novoObjeto = Context.number
        novoObjeto[0].preco = 111
        Context.number[0].preco = 111
        // localStorage()
        // console.log(novoObjeto)
        // console.log(Context.number)
        // localStorage.setItem('dataApi',JSON.stringify(novoObjeto))
    }
    return (
        <section>
            <NewCard.Div>
                <NewCard.Text></NewCard.Text>
                <NewCard.Image image={'https://refactoring.guru/images/content-public/logos/logo-new.png?id=97d554614702483f31e38b32e82d8e34'}></NewCard.Image>
                <NewCard.Text text={'ola mundo'} ></NewCard.Text>
                <NewCard.Btt1></NewCard.Btt1>
                <NewCard.Btt2></NewCard.Btt2>
            </NewCard.Div>
            <NewCard.Div>
                <NewCard.Text></NewCard.Text>
                <NewCard.Image image={'https://refactoring.guru/images/content-public/logos/logo-new.png?id=97d554614702483f31e38b32e82d8e34'}></NewCard.Image>
                <NewCard.Text text={'ola mundo'} ></NewCard.Text>
                {/* <NewCard.Btt1></NewCard.Btt1> */}
                {/* <NewCard.Btt2></NewCard.Btt2> */}
            </NewCard.Div>
            <NewCard.Div>
                <NewCard.Text></NewCard.Text>
                <NewCard.Image image={'https://refactoring.guru/images/content-public/logos/logo-new.png?id=97d554614702483f31e38b32e82d8e34'}></NewCard.Image>
                <NewCard.Text text={'ola mundo'} ></NewCard.Text>
                <NewCard.Btt1></NewCard.Btt1>
                {/* <NewCard.Btt2></NewCard.Btt2> */}
            </NewCard.Div>
        
        </section>
    )
}