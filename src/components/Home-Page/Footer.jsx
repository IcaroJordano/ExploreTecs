export function Footer() {
    return (
        <footer className=" w-full text-white bg-black ">
            <div className="pt-5 pl-10 ">
                <h5 className="font-semibold pb-2">Navegacao</h5>
                <h6 className="my-2">Loja</h6>
                <h6 className="my-2">Sobre</h6>
                <h6 className="my-2">Termos de uso</h6>
                <h6 className="my-2">Politica de Privacidade</h6>
                <h6 className="my-2">Perguntas frenquentes</h6>
                <h6 className="my-2">Trocas e Devolucoes</h6>
                {/*  */}
                <h5 className="font-semibold mt-5">Redes Sociais</h5>
                <div className="flex h-10 my-2">
                    <a className="bg-gray-500 mx-2 h-10 w-10 flex justify-center items-center text-3xl p-4 rounded-full " href="">f</a>
                    <a className="bg-gray-500 mx-2 h-10 w-10 flex justify-center items-center text-3xl p-4 rounded-full " href="">f</a>
                    <a className="bg-gray-500 mx-2 h-10 w-10 flex justify-center items-center text-3xl p-4 rounded-full " href="">f</a>
                </div>
                {/*  */}
                <h5 className="font-semibold mt-5">Formas de Pagamento</h5>
                <div className="flex h-10 py-2">
                    <img className="w-10 mx-2 bg-red-600 h-7" src="" alt="" />
                    <img className="w-10 mx-2 bg-red-600 h-7" src="" alt="" />
                    <img className="w-10 mx-2 bg-red-600 h-7" src="" alt="" />
                    <img className="w-10 mx-2 bg-red-600 h-7" src="" alt="" />
                    <img className="w-10 mx-2 bg-red-600 h-7" src="" alt="" />
                    <img className="w-10 mx-2 bg-red-600 h-7" src="" alt="" /><img src="" alt="" />
                </div>
                {/*  */}
                <h5 className="font-semibold mt-5">Selos e certificacoes</h5>
                <div className="flex py-3">
                    <img className="w-14 mx-2 bg-blue-950 h-10" src="" alt="" />
                    <img className="w-14 mx-2 bg-blue-950 h-10" src="" alt="" /></div>
                {/*  */}
                <h5 className="font-semibold my-3 ">E-Shop</h5>
                <a className="text-xs text-blue-300" href="">aaaaaaa@gmail.com</a>
                <h6 className="text-xs" >Avenida FortalCE</h6>
                <h6 className="text-xs" >Fortal, CE</h6>
                <h6 className="text-xs" >CEP 99999-999</h6>
            </div>
            <hr className="my-4" />
            <span className="mx-auto text-center flex justify-center pb-16" >&copy; 2024 Icaro Jordano</span>
        </footer>
    )
}