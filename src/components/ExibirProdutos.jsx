import { useEffect } from "react";
import { CardProduto } from "./CardProduto";
import { useState } from "react";

import axios from "axios";

export function ExibirProdutos() {
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
            console.log(produtos[0])
          })
          .catch((error) => {
            console.log(error);
          });
    },[])
    return (
        <section className=" h-screen bg-white pt-10">
            <div className="w-full  flex-wrap  mx-auto flex lg:justify-normal justify-center ">
                {produtos.map((item)=>(
                    <CardProduto nome={item.name} preco={item.preco} image={item.linkImage} ></CardProduto>
                ))
                }
                <CardProduto></CardProduto>
                <CardProduto></CardProduto>
            </div>
        </section>
    )
}