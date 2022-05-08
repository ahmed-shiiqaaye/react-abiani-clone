import React, { useState } from 'react'
import './Navbar.css'
function Navbar() {
    const [click, setClick ] = useState(false)

    const handleClick = () => setClick(!click)

  return (
    <section className="navbar_section">
        <div className="wrapper">
            <a href="#" onClick={handleClick} className="logo">
                Abiani
            </a>
            <ul className={click ? 'nav_links active' : 'nav_links'} >
                <li className="nav_item"><a onClick={handleClick} href="#">Home</a></li>
                <li className="nav_item"><a onClick={handleClick}  href="#">About</a></li>
                <li className="nav_item"><a onClick={handleClick}  href="#">Services</a></li>
                <li className="nav_item"><a onClick={handleClick}  href="#">Menu</a></li>
                <li className="nav_item"><a onClick={handleClick}  href="#">Contact</a></li>
            </ul>
            <div className="menu_icon" onClick={handleClick}>
                <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
            </div>
        </div>
    </section>
  )
}

export default Navbar