import React from 'react'

import Menu from './Menu'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <Menu/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
