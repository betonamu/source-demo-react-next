import React from 'react';

import Header from "./Header";
import Footer from "./Footer";
import NavigationBottom from './NavigationBottom';

const Layout = ({ children }) => {
    return (
        <> <Header />
            {children}
            <NavigationBottom/>
        </>
    )

}

export default Layout;