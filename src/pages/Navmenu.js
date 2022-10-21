import React from 'react';
import { NavLink } from 'react-router-dom';
import {NL} from './data';

const Navmenu = () => {
    return (
        <ul>
            {
                NL.map((it, idx) => {
                    return (
                        <li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                    )
                })
            }
        </ul>
    )
}

export default Navmenu