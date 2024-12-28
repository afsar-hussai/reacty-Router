import { Outlet } from "react-router-dom"
import { Header, Footer } from "./components/components"


function Layout() {
  return (
   
    
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
 
    
  )
}

export default Layout
