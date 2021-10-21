import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Detail from "./Detail";

const Layout = ({ children }) => {
    return (
        <> 
            <Header />
            {/* {children} */}
            <Detail/>
        </>
    )

}

export default Layout;