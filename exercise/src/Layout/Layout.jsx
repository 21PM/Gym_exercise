import NavBar from "../header/navbar"
import Footer from "../footer/footer"
import {Outlet} from  "react-router-dom"
import All from "../AllPage/All"

function Layout(){
    return(
          
          <>
        
            <NavBar/>
                <main>
                <Outlet/>
                </main>
                
            <Footer/>
          </>
    )
}

export default Layout;