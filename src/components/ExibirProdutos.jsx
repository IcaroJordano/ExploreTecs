import { CardProduto } from "./CardProduto";

export function ExibirProdutos() {
    return (
        <section className=" h-screen bg-neutral-100">
            <div className="w-full mx-auto flex justify-around bg-gray-300">
                <CardProduto></CardProduto>
                <CardProduto></CardProduto>
            </div>
        </section>
    )
}