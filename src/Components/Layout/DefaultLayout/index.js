import Footer from "./Footer/Footer";
import Header from "./Header/header";

function DefaultLayout({children}) {
    return ( 
        <div className="container">
            <Header/>
            <div className="content">
                {children}
            </div>
            <Footer/>
        </div>
     );
}

export default DefaultLayout;