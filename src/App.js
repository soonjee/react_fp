import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Wrapper from './pages/Wrapper';
import Header from './pages/Header';
import Main from './pages/Main';
import Sub01 from './pages/Sub01';
import Sub02 from './pages/Sub02';
import Sub03 from './pages/Sub03';
import Sub04 from './pages/Sub04';
import Sub05 from './pages/Sub05';
import Sub06 from './pages/Sub06';
import Footer from './pages/Footer';
import './css/basic.scss';
import './css/Subpage.scss';

const App = () => {
  const SUBSLIDER = [
    { id: 1, subt: "We are Creativity Builder", tit: "대표 인사말", ctg: "회사소개", link: "/sub01" },
    { id: 2, subt: "We are Creativity Builder", tit: "사업소개", ctg: "사업영역", link: "/sub02" },
    { id: 3, subt: "We are Creativity Builder", tit: "브랜드 소개", ctg: "홍보센터", link: "/sub03" },
    { id: 4, subt: "We are Creativity Builder", tit: "비전", ctg: "윤리 및 지속가능경영", link: "/sub04" },
    { id: 5, subt: "We are Creativity Builder", tit: "현장조회", ctg: "고객지원", link: "/sub05" },
    { id: 6, subt: "We are Creativity Builder", tit: "인재상", ctg: "인재채용", link: "/sub06" },
  ]

  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Sub01' element={<Sub01 content={SUBSLIDER} />} />
        <Route path='/Sub02' element={<Sub02 content={SUBSLIDER} />} />
        <Route path='/Sub03' element={<Sub03 content={SUBSLIDER} />} />
        <Route path='/Sub04' element={<Sub04 content={SUBSLIDER} />} />
        <Route path='/Sub05' element={<Sub05 content={SUBSLIDER} />} />
        <Route path='/Sub06' element={<Sub06 content={SUBSLIDER} />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;
