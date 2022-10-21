import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import '../css/Main.scss';
import {SLIDE} from './data';

// 2022. 10. 21

const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);
    const mainSlide = useRef(null);
    const setting = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        afterChange: index => setIDX(index),
        // dots: true,
        // dotsClass: 'dots_wrap',
        arrows: false,
    }
    return (
        <section className='Main'>
            <div className="MainVisual">
                <div className='MV_slide'>
                    <Slider {...setting}
                    ref={mainSlide}
                    >
                        {
                            SLIDE.map((slide, idx) => {
                                return (
                                    <figure key={slide.id} className={'itm0' + slide.id + (idx === IDX ? ' on' : '')}>
                                        <div className='Main_typo'>
                                            <p className='typo_tit'>{slide.title}</p>
                                            <p className='typo_des'>{slide.des}</p>
                                            <p className='typo_tit two'>{slide.two_title}</p>
                                        </div>
                                    </figure>
                                )
                            })
                        }
                    </Slider>
                </div>
                <div className='MV_controls'>
                    <div className='arrows_wrap'>
                        <button className='controls_arrow prev' onClick={()=>mainSlide.current.slickPrev()}></button>
                        <button className='controls_arrow next' onClick={()=>mainSlide.current.slickNext()}></button>
                    </div>
                    <div className="slideNum_wrap">
                        <span className='num-current'>0{IDX + 1}</span> 
                        /
                        <span className='num-total'>0{SLIDE.length}</span>
                    </div>
                    {/* <ul className='dots_wrap slick-dots'>
                        <li>
                            <strong className='dots_tit'>건축분야</strong>
                            <span className='dots_sub'>Housing Works</span>
                            <div className='process'>
                                <span className='bar'></span>
                            </div>
                        </li>
                        <li>
                            <strong className='dots_tit'>건축분야</strong>
                            <span className='dots_sub'>Housing Works</span>
                            <div className='process'>
                                <span className='bar'></span>
                            </div>
                        </li>
                    </ul> */}
                </div>
            </div>
            
        </section >
    )
}

export default MainVisual