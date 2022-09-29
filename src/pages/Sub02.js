import React from 'react'
import Article from './Article';
import '../css/Subpage.scss';

const Sub02 = ({ content }) => {
    const num = 1;
    return (
        <div className='Subpage'>
            <div className="itm02 itm">
                <Article content={content} num={num} />
            </div>
            <div className="SubInner">
                <h3>
                    ㈜서해종합건설은<span className='bluetxt'>새로운 가치 창출을</span><br />
                    <span className='bluetxt'>바탕으로 주거문화 발전</span>에 크게 기여해 왔습니다.
                </h3>
                <p>
                    ㈜서해종합건설은 끊임없이 변화하는 환경에 능동적으로 대처해 왔으며, 새로운 가치 창출을 바탕으로 하여 주거문화 발전에 크게 기여해 왔습니다.<br />
                    앞으로도 인간, 자연, 환경의 조화를 함께 생각하는 안목과 미래의 변호를 철저히 대비한 각 분야에 고도의 전문성이 응집된 첨단 기술력을 바탕으로<br />건설문화의 주역이 될 것임을 약속 드립니다.
                    <br />
                    <br />

                </p>
            </div>
        </div>
    )
}

export default Sub02