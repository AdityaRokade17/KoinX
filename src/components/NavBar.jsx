import React from 'react'

import Logo  from '../Assets/KoinX-logo.png'
import './NavBar.css'

const NavBar = () => {

  return (
    <nav className='nav flex justify-between items-center p-5'>

        <div className='logo ml-5'>
            <img src={Logo} alt='logo' />
        </div>
        <div className='nav-item flex items-center gap-5 mr-5'>
            <ul className='nav-items flex gap-5'>
                <li>
                    <a href='' >Crypto Taxes</a>
                </li>
                <li>
                    <a href='' >Free Tools</a>
                </li>
                <li>
                    <a href='' >Resource Center</a>
                </li>
            </ul>
            <button className='px-[18px] py-[8px] btn'>Get Started</button>
        </div>
    </nav>
  )
}

export default NavBar

