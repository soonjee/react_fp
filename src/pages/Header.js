import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navmenu from './Navmenu';
import '../css/basic.scss';
// on 이벤트 https://goddino.tistory.com/317?category=1080917,
// https://velog.io/@devstefancho/react-scroll-event-5e1vuub9


const Header = () => {
    const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
    const [ScrollActive, setScrollActive] = useState(false);
    function handleScroll() {
        if (ScrollY > 500) {
            setScrollY(window.pageYOffset);
            setScrollActive(true);
        } else {
            setScrollY(window.pageYOffset);
            setScrollActive(false);
        }
    }
    useEffect(() => {
        function scrollListener() {
            window.addEventListener("scroll", handleScroll);
        } //  window 에서 스크롤을 감시 시작
        scrollListener(); // window 에서 스크롤을 감시
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }; //  window 에서 스크롤을 감시를 종료
    });

    return (
        <header className={ScrollActive ? "Header fixed" : "Header"}>
            <div className="container">
                <Link to="/">
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