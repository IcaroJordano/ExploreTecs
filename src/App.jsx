import { BrowserRouter as Router } from "react-router-dom";
import {ExibirProdutos} from "./components/ExibirProdutos"
import { Navbar } from "./components/Navbar";
import { Rotas } from "./Rotas/Rotas";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    if(localStorage.getItem('dataApi')===null){
      console.log('nao a dados')
    }
    else{
      console.log('tem dados')
    }
  },[])
  ExibirProdutos()
  return (
    <Router>
      <Navbar></Navbar>
      <Rotas></Rotas>
    </Router>
    // <ExibirProdutos></ExibirProdutos>
  )
}

export default App
