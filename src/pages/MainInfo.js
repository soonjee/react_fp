import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import { SDLIST } from './data';
// import styled from 'styled-components';


const MainInfo = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);
    const InfoSlide = useRef(null);
    const setting = {
        className: "center",
        infinite: true,
        centerPadding: "60px", // ? 이거뭐야
        slidesToShow: 3,
        swipeToSlide: true,
    }

    return (
        <section className='MainInfo sc'>
            <div className='inner'>
                <h2 className='tit'>분양안내</h2>
                <p className='sub'>건전한 기업 정신과 체계적인 지식 경영으로 내일의 가치를 높여갑니다.</p>
                <div className='MainInfo_Slider'>
                    <ul>
                        <Slider {...setting}
                        ref={InfoSlide}
                        arrows={false}
                        className={'MI_slide'}
                        >
                            {
                                SDLIST.map((sdlist, idx) => {
                                    return (
                                        <li>
                                            <a className='MI_box'>
                                                <div className='MI_top'>
                                                    <figure key={sdlist.id} className={'infoitm0' + (sdlist.id + (idx === IDX ? ' on' : ''))}>
                                                        <p className='MI_state'>{sdlist.state}</p>
                                                    </figure>
                                                </div>
                                                <div className='MI_bt'>
                                                    <p className='MI_tit'>{sdlist.tit}</p>
                                                    <div className='MI_des'>
                                                        <p>{sdlist.ad}</p>
                                                        <p>{sdlist.scale}</p>
                                                        <p>{sdlist.date}</p>
                                                    </div>
                                                    <div className='MI_go'>
                                                        <a href="">{sdlist.go}</a>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </Slider>
                    </ul>
                </div>
                <div className='MI_acc'>
                    <span className='MI_slide_prev acc_btn' onClick={()=>InfoSlide.current.slickPrev()}></span>
                    <span className='MI_slide_next acc_btn' onClick={()=>InfoSlide.current.slickNext()}></span>
                </div>
            </div>
        </section>
    )
}

export default MainInfo
