import { Outlet } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";


const Layout = () => {

    return (
        <div className="w-screen h-screen bg-black" id="primary-nav">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;