export function CardProduto() {
    return(
        <div className="w-5/12 mt-6 mx-2 ">
            <div className="h-44 bg-red-400 bg-center bg-cover bg-[url('https://rsv-ink-images-production.s3.sa-east-1.amazonaws.com/images/product_v2/main_image/394aac6b4bf23b7a64b35c79e03e0568.webp')] relative">
                <span className="bg-black text-xs scale-75 p-1 absolute -top-2 -left-2 rounded-md text-white">15% OFF</span>
            </div>
            <h2 className=" text-base leading-none my-2 font-normal w-10/12 mx-auto text-center">Camiseta O Py ta On!</h2>
            <h2 className="w-10/12 my-1 mx-auto text-sm text-center font-extrabold">
                <del>R$99,00</del>
                |
                <span>R$84,90</span>
            </h2>
            <h4 className="mx-auto w-10/12 text-[10px] text-center">6x de R$14,15 sem juros</h4>
        </div>
    )
}