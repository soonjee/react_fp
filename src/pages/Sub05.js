import React from 'react'
import Article from './Article';
import '../css/Subpage.scss';

const Sub05 = ({ content }) => {
    const num = 4;
    return (
        <div className='Subpage'>
            <div className="itm05 itm">
                <Article content={content} num={num} />
            </div>
        </div>
    )
}

export default Sub05