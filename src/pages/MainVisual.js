import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import '../css/Main.scss';
import {SLIDE, BUSINESS} from './data';

const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);
    const mainSlide = useRef(null);
    const setting = {
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        afterChange: index => setIDX(index),
        dots: false,
        arrows: false,
    }
    return (
        <section className='Main'>
            <div className="MainVisual">
                <div className='MV_slide'>
                    <Slider {...setting}
                    ref={mainSlide}
                    // dotsClass='dots_wrap'
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
                    <ul className='custom_dots'>
                            {
                                BUSINESS.map((business, idx)=> {
                                    return (
                                        <li key={business.id} className={(idx === IDX ? 'slick-active bar__start' : '')}>
                                            <strong>{business.Field}</strong>
                                            <span>{business.sub}</span>
                                            <div className='progress'>
                                                <span className='bar'></span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                </div>
            </div>
            
        </section >
    )
}

export default MainVisual