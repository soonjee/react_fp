import React from 'react';
import '../css/Footer.scss';

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className='container'>
                <div className="ft_top">
                    <div className='privacy_list'>
                        <ul>
                            <li><a href="/">개인정보보호정책</a></li>
                            <li><a href="/">이메일주소무단수집거부</a></li>
                            <li><a href="/">찾아오시는길</a></li>
                        </ul>
                    </div>
                    <div div className='privacy_family'>
                        <form>
                            <select id="goto_familiy_site" name="select" onchange="window.open(value,'_blank');">
                                <option value="FAMILY SITE">FAMILY SITE</option>
                                <option value="http://www.seasidearden.com/">씨사이드아덴</option>
                                <option value="https://www.stjohns.co.kr/">세인트존스호텔</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="ft_btm">
                    <figure className='ft_logo'>
                        <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="" />
                    </figure>
                    <div className="ft_add">
                        <dl>
                            <dd>ADDRESS
                                <dt>(06606)서울특별시 서초구 서초대로 301,6층(서초동,동익성봉빌딩)</dt>
                            </dd>
                            <dd>
                                TEL
                                <dt>02&#41;761-1234</dt>
                            </dd>
                            <dd>
                                FAX
                                <dt>02&#41;783-7922</dt>
                            </dd>
                        </dl>
                        <p className='ft_copy'>&copy;Copyright ⓒ 2020 Seohai Construction. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer