import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./components/Header";
import { Rotas } from "./components/Rotas/Rotas";
// import {ExibirProdutos} from "./components/ExibirProdutos"

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from "./components/Header";
function App() {
  // ExibirProdutos()
  return (
    <Router>
      <Header></Header>
      <Rotas></Rotas>
    </Router>
  )
}

export default App
