import React, { useEffect } from 'react'
import Article from '../Article';
import '../../css/Subpage.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Sub03_2p = ({ content }) => {
    const num = 2;
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='Subpage'>
            <div className="itm03 itm">
                <Article content={content} num={num} />
            </div>
            <div className='SubInner'>
                <div className='tab_nav'>
                    <li><Link to='/Sub03'>서해그랑블</Link></li>
                    <li className='active'><Link to='/sub03_page/Sub03_2p'>스카이팰리스</Link></li>
                    <li><Link to='/sub03_page/Sub03_3p'>관계사</Link></li>
                </div>
                <div className='sub3tit txcenter'>
                    <h3 className='m20'>
                        스카이팰리스는 <span className='bluetxt'>삶을 아름다운 작품</span>으로<br />
                        만들어 드릴 하이엔드 브랜드 입니다.
                    </h3>
                    <p>
                        스카이팰리스(SKY PALACE)는 하늘 위의 궁전을 형상화한 것으로
                        <br/>
                        스카이라인, 스카이 파노라마 뷰를 소유한 프리미엄 주거공간을 상징합니다.
                        <br/>
                        지역의 자부심이 될 초고층 조망권과 고품격의 랜드마크를 짓겠다는 의지를 담은 39년 건설명가 서해종합건설의 하이엔드 브랜드입니다.
                    </p>
                </div>
                <div className='sub_btm' data-aos="fade-up" data-aos-duration="1500">
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/assets/img/sub03_2p_cnt.jpg"} alt="" />
                    </figure>
                </div>
            </div>

        </div>
    )
}

export default Sub03_2p