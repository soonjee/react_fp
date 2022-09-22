import React from 'react'

const BUSINESS = [
    {id:1, Field:"건축 분야", sub:"Housing Works", btn:"자세히 보기", link:"/"},
    {id:2, Field:"공공 분야", sub:"Architecture Works", btn:"자세히 보기", link:"/"},
    {id:3, Field:"레저 분야", sub:"Leisure Works", btn:"자세히 보기", link:"/"},
    {id:4, Field:"토목 분야", sub:"Development Works", btn:"자세히 보기", link:"/"},
]

const MainInfo = () => {
    return (
        <section className='MainInfo'>
            <div className='inner'>
                <h2 className='tit'>사업소개</h2>
                <p className='sub'>고객을 위한 가치 창조, 고객의 최대 감동을 위해 최선의 노력을 다하겠습니다.</p>
                <ul className='info_box'>
                        { BUSINESS.map((business, idx) => {
                            return (
                                <li className='info_itm'>
                                    <figure key={business.id} className={'itm0' + business.id}>
                                        <p className='info_fd'>{business.Field}</p>
                                        <p className='info_sub'>{business.sub}</p>
                                        <div className='btn'>
                                            <a href={business.btn} target="_blank" className='btn'>
                                                <img src={process.env.PUBLIC_URL + "/public/assets/img/ic_plus.png"} alt="" />
                                            </a>
                                        </div>
                                    </figure>
                                </li>
                                
                            )}) 
                        }
                </ul>
            
            </div>
        </section>  
    )
}

export default MainInfo