import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { MPFLIST } from './data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainPerformance = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0);
        AOS.init();
    }, []);
    const mpfSlide = useRef(null);
    const setting = {
        className: "center",
        infinite: true,
        slidesToShow: 3,
        swipeToSlide: true,
    }


return (

    <section className='MainPerformance sc'>
        <div className='inner'>
                <h2 className='tit'>사업실적</h2>
                <p className='sub'>고객의 최대 감동을 위해 최선의 노력을 다하겠습니다.</p>
                <div className='MainPerformance_Slider' data-aos="fade-up" data-aos-duration="1500">
                    <ul>
                        <Slider {...setting}
                        ref={mpfSlide}
                        arrows={false}
                        centerMode={false}
                        className={'MPF_slide'}
                        >
                            {
                                MPFLIST.map((mpflist, idx) => {
                                    return (
                                        <li>
                                            <div className='MPF_top'>
                                                <figure key={mpflist.id} className={'mpf0' + (mpflist.id + (idx === IDX ? ' on' : ''))}>
                                                </figure>
                                            </div>
                                            <div className='MPF_bt'>
                                                <p className='MPF_tit'>{mpflist.tit}</p>
                                                <p className='MPF_address'>{mpflist.address}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </Slider>
                    </ul>
                </div>
                <div className='MPF_acc'>
                    <span className='MPF_slide_prev acc_btn' onClick={()=>mpfSlide.current.slickPrev()}></span>
                    <span className='MPF_slide_next acc_btn' onClick={()=>mpfSlide.current.slickNext()}></span>
                </div>
                <div className='MPF_more_btn'>
                    <a href="/">View more</a>
                </div>
            </div>
    </section>
  )
}

export default MainPerformance