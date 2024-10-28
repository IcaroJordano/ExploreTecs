import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Rotas } from "./components/Rotas/Rotas";
// import {ExibirProdutos} from "./components/ExibirProdutos"

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
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
