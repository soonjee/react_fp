import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const MPFLIST = [
  {id: 1, tit: "건축 분야", address:"경기도 화성시 병점동 5-31, 5-32번지 (병점복합타운 업무용지 3-1, 3-2블럭)",link:"/" },
  {id: 2, tit: "건축 분야", address:"인천광역시 연수구 옥련동 118-46번지 일원",link:"/" },
  {id: 3, tit: "건축 분야", address:"동춘2구역 도시개발사업구역 내 1-1BL",link:"/" },
  {id: 4, tit: "건축 분야", address:"인천광역시 연수구 옥련동 118-1번지 일원",link:"/" },
  {id: 5, tit: "건축 분야", address:"경기도 군포시 대야미동 666-1번지 일원",link:"/" },
  {id: 6, tit: "건축 분야", address:"서울시 은평구 구산동 307-1번지 일원",link:"/" },
  {id: 7, tit: "건축 분야", address:"서울시 서초구 방배동 3279",link:"/" },
  {id: 8, tit: "건축 분야", address:"동춘2구역 도시개발사업구역 내 4블럭",link:"/" },
  
]

const MainPerformance = () => {
  const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
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
                <div className='MainPerformance_Slider'>
                    <ul>
                        <Slider {...setting} ref={mpfSlide}>
                            {
                                MPFLIST.map((mpflist, idx) => {
                                    return (
                                        <li>
                                            <figure key={mpflist.id} className={'mpf0' + (mpflist.id + (idx === IDX ? ' on' : ''))}>
                                            </figure>
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
            </div>
    </section>
  )
}

export default MainPerformance