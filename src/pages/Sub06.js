import React from 'react'
import Article from './Article';
import '../css/Subpage.scss';

const Sub06 = ({ content }) => {
    const num = 5;
    return (
        <div className='Subpage'>
            <div className="itm06 itm">
                <Article content={content} num={num} />
            </div>
        </div>
    )
}
export default Sub06