import { Routes, Route } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Page2 } from "./Pages/Page2"
import { Page3 } from "./Pages/Page3"



export function Rotas(params) {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Page2" element={<Page2></Page2>}></Route>
            <Route path="/Page3" element={<Page3></Page3>}></Route>
        </Routes>
    )
}
