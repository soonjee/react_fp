import React from 'react'
import Article from './Article';
import '../css/Subpage.scss';

const Sub03 = ({ content }) => {
    const num = 2;
    return (
        <div className='Subpage'>
            <div className="itm03 itm">
                <Article content={content} num={num} />
            </div>

        </div>
    )
}

export default Sub03