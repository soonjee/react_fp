import React from 'react'
import Article from './Article';
import '../css/Subpage.scss';

const Sub04 = ({ content }) => {
    const num = 3;
    return (
        <div className='Subpage'>
            <div className="itm04 itm">
                <Article content={content} num={num} />
            </div>
        </div>
    )
}
export default Sub04