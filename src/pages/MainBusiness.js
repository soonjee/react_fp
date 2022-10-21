import React from 'react';
import { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import { BUSINESS } from './data';

const MainBusiness = () => {
    const [HV, setHv] = useState()
    const [MouseHover, setMouseHover] = useState(0);
    useEffect(() => {
        setHv(0)
    }, []);
    const mbslide = useRef(null);
    return (
        <section className='MainBusiness sc'>
            <div className='inner'>
                <h2 className='tit'>사업소개</h2>
                <p className='sub'>고객을 위한 가치 창조, 고객의 최대 감동을 위해 최선의 노력을 다하겠습니다.</p>
                <div className='MB_cnt'>
                    <div className='MB_bg_wrap'>
                        <Slider
                                arrows={false}
                                ref={mbslide}
                                >
                            <figure className='mb_bg00'></figure>
                            <figure className='mb_bg01'></figure>
                            <figure className='mb_bg02'></figure>
                            <figure className='mb_bg03'></figure>
                        </Slider>
                    </div>
                    <ul className='MB_list'>
                        { BUSINESS.map((business, idx) => {
                            return (
                                <li className='MB_itm'>
                                    <a className={'MB_box' + (idx === MouseHover ? ' on' : '')}
                                    onMouseOver={()=> setMouseHover(1)}
                                    onMouseOut={()=>setMouseHover(0)} // 아 모르것다.. 마우스오버 시 슬라이드 바꾸기 ㅗㅗ
                                    >
                                        <div className='info_icon'> 
                                            <img src={process.env.PUBLIC_URL + "/assets/img/main_business_icon_0" + business.id + ".png"} alt="" />
                                        </div>
                                        <p className='MB_fd'>{business.Field}</p>
                                        <p className='MB_sub'>{business.sub}</p>
                                        <div className='MB_go'>
                                            <a href={business.btn} target="_blank" className='MB_btn'>
                                                자세히 보기
                                                <img className='plus_icon' src={process.env.PUBLIC_URL + "/assets/img/ic_plus.png"} alt="" />
                                            </a>
                                        </div>
                                    </a>
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default MainBusiness