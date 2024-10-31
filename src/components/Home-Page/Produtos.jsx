// import { CardProduto } from "./CardProduto/CardProdutoDiv";

import { Produto } from "./CardProduto/Produto";

export function Produtos() {
    return (
        <div className='flex w-11/12 lg:w-full mx-auto flex-wrap p-0 justify-around '>
            <Produto.Div>
                <Produto.Promocao></Produto.Promocao>
            </Produto.Div>
            <Produto.Div>
                <Produto.Preco></Produto.Preco>
            </Produto.Div>
            <Produto.Div>
                <Produto.Preco></Produto.Preco>
            </Produto.Div>
            <Produto.Div>
                <Produto.Promocao></Produto.Promocao>
            </Produto.Div>
            <Produto.Div>
                <Produto.Promocao></Produto.Promocao>
            </Produto.Div>
            <Produto.Div>
                <Produto.Preco></Produto.Preco>
            </Produto.Div>
            <Produto.Div>
                <Produto.Preco></Produto.Preco>
            </Produto.Div>
            <Produto.Div>
                <Produto.Promocao></Produto.Promocao>
            </Produto.Div>     
        </div>
    )
}