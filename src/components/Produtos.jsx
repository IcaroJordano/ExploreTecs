import { CardProduto } from "./CardProduto";

export function Produtos() {
    return (
        <div className='flex w-11/12 lg:w-full mx-auto flex-wrap p-0 justify-around '>
            <CardProduto></CardProduto>
            <CardProduto></CardProduto>
            <CardProduto></CardProduto>
            <CardProduto></CardProduto>
            <CardProduto></CardProduto>
            <CardProduto></CardProduto>
            <CardProduto></CardProduto>
            <CardProduto></CardProduto>
        </div>
    )
}