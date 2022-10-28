import React from 'react';
import { IoMdHome } from "react-icons/io";

const Article = ({ content, num }) => {
    return (
        <div className='Article'>
            <div className="container">
                <div className="sub_t">
                    <p className='sub_atc_sub'>We are Creativity Builder</p>
                    <h2 className='sub_atc_tit'>{content[num].tit}</h2>
                </div>
                <div className="sub_nav">
                    <ul>
                        <li><a href=""><IoMdHome /></a></li>
                        <li><a href="">{content[num].gnb}</a></li>
                        <li>{content[num].tit}</li>
                    </ul>
                </div>
            </div>
            {console.log(num)}
        </div >
    )
}

export default Article