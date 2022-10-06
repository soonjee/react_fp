import React from 'react'
import { NavLink } from 'react-router-dom'



const Navmenu = () => {
    const NAVLINK = [
        { content: "회사소개", link: "/sub01" },
        { content: "사업영역", link: "/sub02" },
        { content: "홍보센터", link: "/sub03" },
        { content: "윤리 및 지속가능경영", link: "/sub04" },
        { content: "현장 조회", link: "/sub05" },
        { content: "인재채용", link: "/sub06" },
    ]
    return (
        <ul>
            {
                NAVLINK.map((it, idx) => {
                    return (
                        <li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                    )
                })
            }
        </ul>
    )
}

export default Navmenu