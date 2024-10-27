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
            const post=((res.data.data.allProdutos))
            Context.setNumber(post)
            localStorage.setItem('dataApi',JSON.stringify(post))
            console.log()
          }).then(()=>{
          })
          // .then((resp)=>{
          //   localStorage.setItem('dataApi',JSON.stringify(resp.data.data['allProdutos'][0]))
          // })
        //   .then(()=>{
        //     Context.setNumber(produtos)
        //   })
          .catch((error) => {
            console.log(error);
          });
    },[])
}