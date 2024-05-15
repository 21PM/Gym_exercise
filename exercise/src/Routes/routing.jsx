import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "../Layout/Layout"
import Hero from "../centerpage/hero"
import All from "../AllPage/All"

function Routing(){
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index="/hero" element={<Hero/>}/>
                <Route path="/all" element={<All/>}/>
                <Route path="*" element={<h1>Page Not Found</h1>}/>
                </Route>

            </Routes>

        </BrowserRouter>


    )   
}

export default Routing;