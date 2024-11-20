import { Outlet } from "react-router-dom"
import Navbar from "../Components/Shared/Navbar"
import Footer from "../Components/Shared/Footer"

const MainLayouts = () => {
  return (
    <div className="mx-auto bg-base-100">
        <div>
                <Navbar/>
            </div>
            <div className="min-h-screen">
            <Outlet/>
            </div>
            <div>
            <Footer/>
            </div>
    </div>

  )
}

export default MainLayouts