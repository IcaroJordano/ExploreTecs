import { useEffect } from "react";
import { CardProduto } from "./CardProduto";
import { useState } from "react";

export function ExibirProdutos() {
    const [produtos,setProdutos]=useState([])
    useEffect(()=>{
        fetch(
            'https://graphql.datocms.com/',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Icaro Jordano ${'d26af1aed529c01033f2abecbcd798'}`,
              },
              body: JSON.stringify({
                query: `{
              allProdutos{
                linkImage
                name
                preco
}
  }`
              }),
            }
          )
          .then(res => res.json())
          .then((res) => {
            console.log(res.data)
            setProdutos(res.data['allProdutos'])
            console.log(produtos[0])
          })
          .catch((error) => {
            console.log(error);
          });
    },[])
    return (
        <section className=" h-screen bg-white pt-10">
            <div className="w-full  flex-wrap  mx-auto flex lg:justify-normal justify-center ">
                {/* <p>{produtos}</p> */}
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