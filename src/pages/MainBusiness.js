import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import '../css/Main.scss';


const SLIDE = [
    { id: 1, title: "HOUSING", des: "삶의 안락함과 여유를 갖춘 진정한 보금자리" },
    { id: 2, title: "HOUSING", des: "삶의 안락함과 여유를 갖춘 진정한 보금자리" },
    { id: 3, title: "HOUSING", des: "삶의 안락함과 여유를 갖춘 진정한 보금자리" }
]

const MainBusiness = () => {
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
        dots: true,
        arrows: false,
    }
    return (
        <section className='Main'>
            <div className="MainBusiness">
                <Slider {...setting} ref={mainSlide}>
                    {
                        SLIDE.map((slide, idx) => {
                            return (
                                <figure key={slide.id} className={'itm0' + slide.id + (idx === IDX ? ' on' : '')}>
                                    <div className='Main_typo'>
                                        <p className='typo_tit'>{slide.title}</p>
                                        <strong className='typo_des'>{slide.des}</strong>
                                    </div>
                                </figure>
                            )
                        })
                    }
                </Slider>
            </div>
            <div className="MainControl">
                <div className="Main_arrows_wrap">
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/public/assets/img/main_arrow_prev.png"} alt="" />
                    </figure>
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/public/assets/img/main_arrow_next.png"} alt="" />
                    </figure>
                </div>
                <div className="Main_Counter">
                    <span className='counter__num-current'>1</span>
                    " / "
                    <span className='counter__num-total'>4</span>
                </div>
                <div className="Main_paly">
                    <button className='play__bt-play'>
                        <img src={process.env.PUBLIC_URL + "/public/assets/img/main_play.png"} alt="" />
                    </button>
                    <button className='play__bt-pause'>
                        <img src={process.env.PUBLIC_URL + "/public/assets/img/main_pause.png"} alt="" />
                    </button>
                </div>
            </div>
        </section >
    )
}

export default MainBusiness