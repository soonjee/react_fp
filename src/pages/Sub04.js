import React, { useEffect } from 'react'
import Article from './Article';
import '../css/Subpage.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Sub04 = ({ content }) => {
    const num = 3;
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        // 윤리 및 지속가능경영
        <div className='Subpage'>
            <div className="itm04 itm">
                <Article content={content} num={num} />
            </div>
            <div className="SubInner" >
                <h3 className='m20'>
                    ㈜서해종합건설은 <span className='bluetxt'>인간 존중</span>의 <span className='bluetxt'>조적 열정</span>으로<br />
                    새로운 미래 도시를 열어가는 기업
                </h3>
                <p>
                    인간 존중의 가치와 창조적 열정으로 새로운 미래도시를 열어가는 건설산업의 리더,
                    <br />
                    ㈜서해종합건설의 앞선 기술로 완성합니다.
                    <br />
                    새로운 세계를 창조하는 ㈜서해종합건설은 앞으로도 최고의 가치를 고객 여러분께 선사하겠습니다.
                </p>
            </div>
            <div className='BgInner mt_bg'>
                <div className='motto'>
                    <h3>사훈</h3>
                    <ul data-aos="fade-up" data-aos-duration="1500">
                        <li>
                            <figure className='motto_icon'>
                                <img src={process.env.PUBLIC_URL + "/assets/img/motto_ic01.png"} alt="" />
                            </figure>
                            <p className='motto_des'><span className='bluetxt'>즉시</span>한다.</p>
                        </li>
                        <li>
                            <figure className='motto_icon'>
                                <img src={process.env.PUBLIC_URL + "/assets/img/motto_ic02.png"} alt="" />
                            </figure>
                            <p className='motto_des'><span className='bluetxt'>반드시</span>한다.</p>
                        </li>
                        <li>
                            <figure className='motto_icon'>
                                <img src={process.env.PUBLIC_URL + "/assets/img/motto_ic01.png"} alt="" />
                            </figure>
                            <p className='motto_des'><span className='bluetxt'>끝까지</span>한다.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Sub04