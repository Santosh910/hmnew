import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi'
import Menucard from './Menucard'

const Restaurant = () => {
    const[menuData, setMenuData] = useState(Menu);
    // console.log()
    return (
        <>
          <Menucard menuData={menuData}/>
         
        </>
    )
}

export default Restaurant