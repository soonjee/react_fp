import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
// import styled from 'styled-components';

const SDLIST = [
    {id:1, state: "분양예정", tit: "용인 양지2블럭 지역주택사업", ad:"경기도 용인시 양지면 양지리 산 105-8번지 일원", scale:"공동주택 1,274세대", date:"2024.04.06", go:"상세보기", link:"/" },
    {id:2, state: "분양중", tit: "청림동 비역주택 조합 아파트", ad:"경기도 용인시 양지면 양지리 산 105-8번지 일원", scale:"공동주택 1,274세대", date:"2024.04.06", go:"상세보기", link:"/" },
    {id:3, state: "분양중", tit: "진천문백 지역주택조합", ad:"경기도 용인시 양지면 양지리 산 105-8번지 일원", scale:"공동주택 1,274세대", date:"2024.04.06", go:"상세보기", link:"/" },
    {id:4, state: "분양예정", tit: "괴산 서부 지역주택사업", ad:"경기도 용인시 양지면 양지리 산 105-8번지 일원", scale:"공동주택 1,274세대", date:"2024.04.06", go:"상세보기", link:"/" },
    {id:5, state: "분양중", tit: "여주 서해스카이팰리스 주상복합", ad:"경기도 용인시 양지면 양지리 산 105-8번지 일원", scale:"공동주택 1,274세대", date:"2024.04.06", go:"상세보기", link:"/" },
    {id:6, state: "분양중", tit: "안성 공도 공동주택사업", ad:"경기도 용인시 양지면 양지리 산 105-8번지 일원", scale:"공동주택 1,274세대", date:"2024.04.06", go:"상세보기", link:"/" },
    {id:7, state: "분양예정", tit: "공주금홍 행복주택 건설공사", ad:"경기도 용인시 양지면 양지리 산 105-8번지 일원", scale:"공동주택 1,274세대", date:"2024.04.06", go:"상세보기", link:"/" },
]

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
                        <Slider {...setting} ref={InfoSlide}>
                            {
                                SDLIST.map((sdlist, idx) => {
                                    return (
                                        <li>
                                            <a className='MI_box'>
                                                <div className='MI_top'>
                                                    <figure key={sdlist.id} className={'itm0' + (sdlist.id + (idx === IDX ? ' on' : ''))}>
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
            </div>
        </section>
    )
}

export default MainInfo
