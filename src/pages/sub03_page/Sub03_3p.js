import React, { useEffect } from 'react'
import Article from '../Article';
import '../../css/Subpage.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Sub03 = ({ content }) => {
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
                    <li><Link to='/sub03_page/Sub03_2p'>스카이팰리스</Link></li>
                    <li className='active'><Link to='/sub03_page/Sub03_3p'>관계사</Link></li>
                </div>
                <div className='sub3tit txcenter'>
                    <h3 className='m20'>
                        서해그랑블은 <span className='bluetxt'>아름다운 주거문화</span>를 건설하는<br />
                        신개념 아파트 브랜드 입니다.
                    </h3>
                    <p>
                        그랑블은 (GRAND BLEU)은 깊고 넓은 바다라는 뜻의 그랑블과 늘 푸른 사철 나뭇잎이 결합된 것으로 친환경 웰빙을 의미하는
                        <br/>
                        그린과 푸른 하늘, 희망을 상징하는 블루로 디자인 되었습니다.
                        <br/>
                        인간의 몸과 마음이 아우러져 평안하고 고귀한 귀족같은 삶을 영위하고자 하는 아름다운 주거문화를 건설하는
                        <br/>
                        ㈜서해종합건설의 의지를 담은 신개념 아파트 브랜드 입니다.
                    </p>
                </div>
                <div className='sub_btm' data-aos="fade-up" data-aos-duration="1500">
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/assets/img/sub03_cnt.jpg"} alt="" />
                    </figure>
                </div>
            </div>

        </div>
    )
}

export default Sub03