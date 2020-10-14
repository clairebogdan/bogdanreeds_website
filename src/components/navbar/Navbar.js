import React, { useState } from 'react';
import '../navbar/Navbar.css'
import { Link } from 'react-router-dom'


export default function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav className="navbar-items">

            <Link to='/' className='navbar-logo-link'>
                <h1 className="navbar-logo">Bogdan Reeds</h1>
            </Link>

            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>    
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                <li className='nav-item'>
                    <Link to='/order' className='nav-links' onClick={closeMobileMenu}>
                        Order
                    </Link> 
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                    
                </li>

                <li className='nav-item'>
                    <Link to='/FAQ' className='nav-links' onClick={closeMobileMenu}>
                        FAQ
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/reedcare' className='nav-links' onClick={closeMobileMenu}>
                        Reed Care
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                        Gallery
                    </Link>
                </li>
            </ul>

        </nav>
        </>
    );
}