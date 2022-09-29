import React from 'react'
import { Link } from 'react-router-dom'
import Navmenu from './Navmenu'


// on 이벤트 https://goddino.tistory.com/317?category=1080917, https://velog.io/@devstefancho/react-scroll-event-5e1vuub9


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