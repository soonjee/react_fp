import React from 'react'
import { Link } from 'react-router-dom'
import Navmenu from './Navmenu'

const Header = () => {
    return (
        <header className='Header'>
            <div className="container">
                <Link to="/adm">
                    <h1 className='logo'></h1>
                </Link>
                <nav>
                    <Navmenu />
                </nav>
                <i className='xi-bars'></i>
            </div>
        </header>
    )
}

export default Header