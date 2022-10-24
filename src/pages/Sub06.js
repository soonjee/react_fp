import React, { useEffect } from 'react'
import Article from './Article';
import '../css/Subpage.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Sub06 = ({ content }) => {
    const num = 5;
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        //인재채용
        <div className='Subpage'>
        <div className="itm06 itm">
            <Article content={content} num={num} />
        </div>
        <div className="SubInner" >
            <h3 className='m20'>열정, 창의 그리고 책임감</h3>
            <p>
            ㈜서해종합건설은 미래의 가치를 만들어 가는 하나의 목표로 새로운 도약을 함께할 인재를 생각합니다.<br />
            인재의 가치와 가능성을 위한 믿음을 기반으로, 지속적인 성장의 발판을 마련하기 위한 인재 양성에 힘쓰고 있습니다.

            </p>
        </div>
        <div className='BgInner mt_bg'>
            <div className='Tal'>
                    <ul className='brd_ul' data-aos="fade-up" data-aos-duration="1500">
                        <li className='brd_list'>
                            <div className='brd_top'>
                                <figure className='motto_icon'>
                                    <img src={process.env.PUBLIC_URL + "/assets/img/tal_ic01.png"} alt="" />
                                    <p className='tal_des'>Creative</p>
                                </figure>
                            </div>
                            <p className='brd_des'>
                                창의적이고 혁신적 사고로 미래를<br />
                                준비하는 <span className='bluetxt'>인재</span>
                            </p>
                        </li>

                        <li className='brd_list'>
                            <div className='brd_top'>
                                <figure className='motto_icon'>
                                    <img src={process.env.PUBLIC_URL + "/assets/img/tal_ic02.png"} alt="" />
                                    <p className='tal_des'>Passion</p>
                                </figure>
                            </div>
                            <p className='brd_des'>
                                투철한 목표의식으로 모든 일에 열정이<br />
                                가득한<span className='bluetxt'>인재</span>
                            </p>
                        </li>

                        <li className='brd_list'>
                            <div className='brd_top'>
                                <figure className='motto_icon'>
                                    <img src={process.env.PUBLIC_URL + "/assets/img/tal_ic03.png"} alt="" />
                                    <p className='tal_des'>Responsibility</p>
                                </figure>
                            </div>
                            <p className='brd_des'>
                                긍정적인 마인드로 맡은 업무를 책임감<br />
                                있게 수행하는 <span className='bluetxt'>인재</span>
                            </p>
                        </li>

                        {/* <li className='brd'>
                            <div className='brd_top'>
                                <figure className='motto_icon'>
                                    <img src={process.env.PUBLIC_URL + "/assets/img/tal_ic02.png"} alt="" />
                                </figure>
                                <strong className='tal_des'>Passion</strong>
                            </div>
                            <p className='brd_des'>
                                투철한 목표의식으로 모든 일에 열정이<br />
                                가득한<span className='bluetxt'>인재</span>
                            </p>
                        </li>

                        <li className='brd'>
                            <div className='brd_top'>
                                <figure className='motto_icon'>
                                    <img src={process.env.PUBLIC_URL + "/assets/img/tal_ic03.png"} alt="" />
                                </figure>
                                <strong className='tal_des'>Responsibility</strong>
                            </div>
                            <div className='brd_des'>
                                <p> 긍정적인 마인드로 맡은 업무를 책임감<br />
                                있게 수행하는 <span className='bluetxt'>인재</span>
                                </p>
                            </div>
                        </li> */}

                    </ul>
                </div>
            </div>
    </div>
    )
}
export default Sub06