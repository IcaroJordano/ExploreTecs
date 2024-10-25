import { CardProduto } from "./CardProduto";

export function ExibirProdutos() {
    return (
        <section className=" h-screen bg-neutral-200 pt-10">
            <div className="w-full flex-wrap mx-auto flex justify-center ">
                <CardProduto></CardProduto>
                <CardProduto></CardProduto>
                <CardProduto></CardProduto>
                <CardProduto></CardProduto>
            </div>
        </section>
    )
}