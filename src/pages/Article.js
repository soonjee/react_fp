import React from 'react';
import { IoMdHome } from "react-icons/io";

const Article = ({ content, num }) => {
    return (
        <div className='Article'>
            {/* <div className="container">
                <div className="sub_t">
                    <p className='sub_atc_sub'>{content[num].subt}</p>
                    <h2 className='sub_atc_tit'>{content[num].tit}</h2>
                </div>
                <div className="sub_nav">
                    <ul>
                        <li className='suv_nav_01'><a href=""><IoMdHome /></a></li>
                        <li className='suv_nav_02'><a href="">{content[num].ctg}</a></li>
                        <li className='suv_nav_03'>{content[num].tit}</li>
                    </ul>
                </div>
            </div> */}
            {console.log(num)}
        </div >
    )
}

export default Article