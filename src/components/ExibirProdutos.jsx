import { useEffect } from "react";

import { useContext, useState } from "react"
// import { ProductsContext } from "../../Context/ProductsContext"

import ProductsProvider, { ProductsContext } from "../Context/ProductsContext";

import axios from "axios";

export function ExibirProdutos() {
    const Context=useContext(ProductsContext)
    const [produtos,setProdutos]=useState([])
    useEffect(()=>{
        axios.post(
            'https://graphql.datocms.com/',
            {
                query: `{
                    allProdutos{
                        linkImage
                        name
                        preco
                    }
                }`
            },
            {
                headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Icaro Jordano d26af1aed529c01033f2abecbcd798`,
          }
    }
)
          .then((res) => {
            console.log(res.data)
            setProdutos(res.data.data['allProdutos'])
            Context.setNumber(res.data.data['allProdutos'])
            console.log(Context.number[0])

          })
        //   .then(()=>{
        //     Context.setNumber(produtos)
        //   })
          .catch((error) => {
            console.log(error);
          });
    },[])
}