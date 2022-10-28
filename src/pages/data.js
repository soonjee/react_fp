// 헤더 Navmenu
const NL = [
    { id: 1, content: "회사소개", link: "/sub01" },
    { id: 2, content: "사업영역", link: "/sub02" },
    { id: 3, content: "홍보센터", link: "/sub03" },
    { id: 4, content: "윤리 및 지속가능경영", link: "/sub04" },
    { id: 5, content: "고객지원", link: "/sub05" },
    { id: 6, content: "인재채용", link: "/sub06" },
]

// Article 
const ATC = [
    { id: 1, tit: "대표 인사말", gnb: "회사소개", link: "/", },
    { id: 2, tit: "사업소개", gnb: "사업영역", link: "/", },
    { id: 3, tit: "브랜드소개", gnb: "홍보센터", link: "/", },
    { id: 4, tit: "비전", gnb: "윤리 및 지속가능경영", link: "/", },
    { id: 5, tit: "하자접수(C/S)", gnb: "고객지원", link: "/", },
    { id: 6, tit: "인재상", gnb: "인재채용", link: "/", },
] 

// 메인 - MainVisual
const SLIDE = [
    { id: 1, title: "HOUSING", des: "삶의 안락함과 여유를 갖춘 진정한 보금자리" },
    { id: 2, title: "ARCHI", two_title: "TECTURE", des: "건축을 통해 새로운 생활터전을 창조" },
    { id: 3, title: "LEISURE", des: "재충전을 통한 삶의 즐거움과 행복" },
    { id: 4, title: "DEVELOP", two_title: "MENT", des: "사회의 근간을 튼튼하게 세상의 뿌리를 탄탄하게" }
]

// 메인 - MainBusiness
const BUSINESS = [
    { id: 1, Field: "건축 분야", sub: "Housing Works", btn: "자세히 보기", link: "/" },
    { id: 2, Field: "공공 분야", sub: "Architecture Works", btn: "자세히 보기", link: "/" },
    { id: 3, Field: "레저 분야", sub: "Leisure Works", btn: "자세히 보기", link: "/" },
    { id: 4, Field: "토목 분야", sub: "Development Works", btn: "자세히 보기", link: "/" },
]

// 메인 - MainInfo
const SDLIST = [
    {id:1, state: "분양예정", tit: "용인 양지2블럭 지역주택사업", ad:"경기도 용인시 양지면 양지리 산 105-8번지 일원", scale:"공동주택 1,274세대", date:"2024.04.06", go:"상세보기", link:"/" },
    {id:2, state: "분양중", tit: "청림동 비역주택 조합 아파트", ad:"경기도 용인시 양지면 양지리 산 105-8번지 일원", scale:"공동주택 1,274세대", date:"2024.04.06", go:"상세보기", link:"/" },
    {id:3, state: "분양중", tit: "진천문백 지역주택조합", ad:"경기도 용인시 양지면 양지리 산 105-8번지 일원", scale:"공동주택 1,274세대", date:"2024.04.06", go:"상세보기", link:"/" },
    {id:4, state: "분양예정", tit: "괴산 서부 지역주택사업", ad:"경기도 용인시 양지면 양지리 산 105-8번지 일원", scale:"공동주택 1,274세대", date:"2024.04.06", go:"상세보기", link:"/" },
    {id:5, state: "분양중", tit: "여주 서해스카이팰리스 주상복합", ad:"경기도 용인시 양지면 양지리 산 105-8번지 일원", scale:"공동주택 1,274세대", date:"2024.04.06", go:"상세보기", link:"/" },
    {id:6, state: "분양중", tit: "안성 공도 공동주택사업", ad:"경기도 용인시 양지면 양지리 산 105-8번지 일원", scale:"공동주택 1,274세대", date:"2024.04.06", go:"상세보기", link:"/" },
    {id:7, state: "분양예정", tit: "공주금홍 행복주택 건설공사", ad:"경기도 용인시 양지면 양지리 산 105-8번지 일원", scale:"공동주택 1,274세대", date:"2024.04.06", go:"상세보기", link:"/" },
]

// 메인 - MainPerformance
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

export { NL, SLIDE, BUSINESS, SDLIST, MPFLIST, ATC }