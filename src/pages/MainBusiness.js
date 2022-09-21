import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const SLIDE = [
    { slideNum: 1, title: "HOUSING", des: "삶의 안락함과 여유를 갖춘 진정한 보금자리" },
    { slideNum: 2, title: "HOUSING", des: "삶의 안락함과 여유를 갖춘 진정한 보금자리" },
    { slideNum: 3, title: "HOUSING", des: "삶의 안락함과 여유를 갖춘 진정한 보금자리" }
]

const MainBusiness = () => {
    return (
        <section className='Main'>
            <div className="MainBusiness">
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <Slider className={`itm itm0${slide.slideNum} ${num === idx ? 'on' : ''}`} key={slide.slideNum}>
                                <div className="content">
                                    <p>{slide.title}</p>
                                    <div className='des'>
                                        {slide.content}
                                    </div>
                                </div>
                            </Slider>
                        )
                    })
                }
            </div>
        </section >
    )
}

export default MainBusiness