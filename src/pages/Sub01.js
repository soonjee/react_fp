import React, { useEffect } from 'react';
import Article from './Article';
import '../css/Subpage.scss';
import '../css/SubInner01.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Sub01 = ({ content }) => {
    const num = 0;
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='Subpage'>
            <div className="itm01 itm">
                <Article content={content} num={num} />
            </div>
            <div className="SubInner" data-aos="fade-up" data-aos-duration="1500">
                <h3>
                    친환경 녹색 아파트와 새로운 주거 트렌드를 통해<br />
                    <span className='bluetxt'>미래형 아파트</span>의 기준을 세워왔습니다.
                </h3>
                <p>
                    저희 ㈜서해종합건설은 1984년 창사 이래 35년이 넘는 시간이 흐르는 동안 주택사업을 넘어 건축과 토목은 물론 도시개발과 리조트사업 및 레저 등 건설사업 전 방위에서 영역을 넓혀왔습니다. 견실한 종합건설사로 성장해오는 동안 변하지 않은 것은 사람을 최우선으로 생각하며 짓겠다는 마음가짐이었습니다.
                    <br />
                    <br />
                    <strong>
                        아름답고 멋진 집 보다 그 안에 들어가 생활하는 사람이 가장 중요합니다. 집이라는 것은 결국 그곳에 사는 사람의 모습을 닮아가기 때문에 일상의 편안함과 여유로움을 갖춘 휴식의 보금자리가 돼야 하는 까닭입니다. 서해종합건설은 기술과 환경이 사람과 조화롭게 어울리는 사람다운 집을 만들기 위해 항상 고민하고 있습니다.
                    </strong>
                    <br />
                    <br />
                    즉시, 반드시 그리고 끝까지.
                    기업의 가치창조를 달성하고자 서해의 임직원들은 쉴 틈 없이 달려왔습니다.
                    이에, 인공지능·사물인터넷·유비쿼터스·스마트홈 등 4차 산업 기술을 건설에 도입하여 사람이 편안한 주거문화를 이루기 위하여 심혈을 기울이고 있으며 r&amp;d에 적극적이고 지속적인 투자를 실행하고 있습니다. 기술은 사람을 풍요롭게 만들기 위한 도구와 같습니다. 특히, 건축기술은 편리하고 안락한 일상을 영위하는데 우선해야 한다고 생각합니다. 대한민국 건축과 주거문화를 이끄는 선도기업이 되기 위한 ㈜서해종합건설의 궁극적 목표도 여기에 있습니다.
                    <br />
                    <br />
                    투명한 기업경영, 친환경적 사업운영, 협력사와의 상생을 통해 지속가능경영의 토대를 쌓는 데에도 힘쓰고 있습니다. 고객의 사랑과 성원을 밑거름 삼아 늘 한결같은 열정과 도전정신으로 차근차근 한 단계씩 성장해 나아가겠습니다.
                    <br />
                    <br />
                    감사합니다.
                    <br />
                    <br />
                    서해종합건설 대표이사
                </p>
            </div>
        </div >
    );
}

export default Sub01