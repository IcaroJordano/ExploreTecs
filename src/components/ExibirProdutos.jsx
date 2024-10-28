import { useEffect } from "react";

import { useContext, useState } from "react"
// import { ProductsContext } from "../../Context/ProductsContext"

import ProductsProvider, { ProductsContext } from "../Context/ProductsContext";

import axios from "axios";

export function ExibirProdutos() {
  const Context = useContext(ProductsContext)
  let check = false
  useEffect(() => {
    if (localStorage.getItem('dataApi') === null) {
      console.log('nao a dados')
      check = true
    }
    else {
      console.log('tem dados')
    }
  }, [])
  useEffect(() => {
    if (check) {
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
          const post = ((res.data.data.allProdutos))
          localStorage.setItem('dataApi', JSON.stringify(post))
          Context.setNumber(JSON.parse(localStorage.getItem('dataApi')))
          console.log('chamou api')
        })
        .catch((error) => {
          console.log(error);
        });
    }
    else{
      Context.setNumber(JSON.parse(localStorage.getItem('dataApi')))
      console.log("nao foi necessario chamar api")
  }
  }, [])
}