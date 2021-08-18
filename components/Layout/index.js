import React from 'react';
import Header from "./Footer";
import Footer from "./Header";

const Layout = ({children}) => {
    return (
        <> <Header/>
            {children}
            <Footer/>
        </>
    )

}

export default Layout;