import Footer from "../footer/Footer.jsx";
import Navbar from "../navbar/Navbar.jsx";

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <div className="main-content ">
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;
