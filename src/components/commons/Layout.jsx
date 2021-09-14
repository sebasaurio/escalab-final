import React from 'react'

import Menu from './Menu'
import '../../assets/styles/layout.css'

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <Menu/>
                {children}
            
        </div>
    )
}

export default Layout
