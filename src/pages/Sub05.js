import React, { useEffect } from 'react'
import Article from './Article';
import '../css/Subpage.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Sub05 = ({ content }) => {
    const num = 4;
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='Subpage'>
            <div className="itm05 itm">
                <Article content={content} num={num} />
            </div>
            <div className='CssInner'>
                <div className='cscenter'>
                    <div className='csc_box'>
                        <div className='csc_left' data-aos="fade-right" data-aos-duration="1500">
                            <figure className='img_ctn'>
                                <img src={process.env.PUBLIC_URL + "/assets/img/cs_img.jpg"} alt="" />
                            </figure>
                        </div>
                        <div className='csc_right' data-aos="fade-up" data-aos-duration="1500">
                            <h3 className='m20'>
                                ㈜서해종합건설은<span className='bluetxt'>최선의</span><br />
                                <span className='bluetxt'>노력으로 정성껏</span>처리하도록<br />
                                하겠습니다.
                            </h3>
                            <p>
                                안녕하십니까?<br/>
                                서해아파트에 입주하여 주셔서 감사드립니다.<br/>
                                입주하여 불편하신 점이나 하자보수가 필요하신 세대는 아래의 해당<br/>
                                연락처로 문의하여 주시면 최선의 노력으로 정성껏 처리하도록 하겠습니다.
                            </p>
                            <div className='csc_time'>
                                <p className='csc_weekd'>
                                    <strong className='weekd_b'>평일</strong>
                                    <span className='weekd_open'>09:00~17:00</span>
                                    ( 점심시간 12:00 ~ 13:00 )
                                </p>
                                <p className='csc_holid'>
                                    <strong className='holid_b'>휴무</strong>
                                    토요일, 일요일, 공휴일 휴무입니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sub05