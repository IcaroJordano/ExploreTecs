export function CardProduto({nome,image,preco}) {
    return(
        <div className="w-5/12  lg:w-64 lg:mx-0 lg:ml-9 mt-6 mx-2 ">
            <div className={` bg-white bg-center relative`}>
                <img className=" object-cover " src={image} alt="" />
                <span className="bg-black text-xs lg:text-sm scale-75 p-1 lg:px-2  absolute -top-2  -left-2 lg:-left-4 rounded-md text-white">15% OFF</span>
            </div>
            <h2 className=" line-clamp-2 text-base lg:text-base lg:items-center justify-center lg:flex lg:h-11  leading-none my-2 lg:my-0  font-normal w-10/12 lg:w-full   mx-auto text-center">{nome}</h2>
            <h2 className="w-10/12  lg:my-0 my-1 mx-auto text-sm lg:text-lg text-center font-extrabold lg:font-semibold">
                <del>R$99,00</del>
                |
                <span>R${preco}0</span>
            </h2>
            <h4 className="mx-auto w-10/12 lg:w-8/12 text-[10px] lg:text-[10px] text-neutral-500 text-center">6x de R$14,15 sem juros</h4>
        </div>
    )
}