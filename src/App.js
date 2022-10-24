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
import Sub03_2p from './pages/sub03_page/Sub03_2p';
import {ATC} from './pages/data'
import './css/basic.scss';
import './css/Main.scss';

const App = () => {
  return (
    <Wrapper>
      {console.log(ATC)}
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Sub01' element={<Sub01 content={ATC}/>} />
        <Route path='/Sub02' element={<Sub02 content={ATC}/>} />
        <Route path='/Sub03' element={<Sub03 />}/>
        <Route path='/sub03_page/Sub03_2p' element={<Sub03_2p />} content={ATC}/>
        <Route path='/Sub04' element={<Sub04 content={ATC}/>}/>
        <Route path='/Sub05' element={<Sub05 content={ATC}/>}/>
        <Route path='/Sub06' element={<Sub06 content={ATC}/>}/>
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;
