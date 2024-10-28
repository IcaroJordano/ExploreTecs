import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Rotas } from "./Rotas/Rotas";
// import {ExibirProdutos} from "./components/ExibirProdutos"

function App() {
  // ExibirProdutos()
  return (
    <Router>
      <Navbar></Navbar>
      <Rotas></Rotas>
    </Router>
  )
}

export default App
