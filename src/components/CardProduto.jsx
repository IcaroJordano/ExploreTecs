export function CardProduto() {
    return(
        <div className="w-5/12 bg-slate-600 ">
            <div className="h-40 bg-red-400">
                <span className="bg-black text-white">15% OFF</span>
            </div>
            <h2 className="text-lg leading-relaxed w-10/12 mx-auto text-center">Camisa o py ta on!</h2>
            <h2 className="w-10/12 my-1 mx-auto font-extrabold">
                <del>R$99,00</del>
                |
                <span>R$84,90</span>
            </h2>
            <h4 className="mx-auto w-10/12 text-xs">6x de R$14,15 sem juros</h4>
        </div>
    )
}