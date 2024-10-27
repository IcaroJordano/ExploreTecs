import { BrowserRouter as Router } from "react-router-dom";
import { ExibirProdutos } from "./components/ExibirProdutos"
import { Navbar } from "./components/Navbar";
import { Rotas } from "./Rotas/Rotas";

function App() {
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
