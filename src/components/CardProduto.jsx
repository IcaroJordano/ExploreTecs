export function CardProduto({nome,image,preco}) {
    return(
        <div className="w-5/12 mt-6 mx-2 ">
            <div className={` bg-white bg-center relative`}>
                <img className="object-cover " src={image} alt="" />
                <span className="bg-black text-xs scale-75 p-1 absolute -top-2 -left-2 rounded-md text-white">15% OFF</span>
            </div>
            <h2 className=" line-clamp-2 text-base leading-none my-2 font-normal w-10/12 mx-auto text-center">{nome}</h2>
            <h2 className="w-10/12 my-1 mx-auto text-sm text-center font-extrabold">
                <del>R$99,00</del>
                |
                <span>R${preco}0</span>
            </h2>
            <h4 className="mx-auto w-10/12 text-[10px] text-center">6x de R$14,15 sem juros</h4>
        </div>
    )
}