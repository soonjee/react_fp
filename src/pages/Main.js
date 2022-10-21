import React from 'react';
import MainVisual from './MainVisual';
import MainBusiness from './MainBusiness';
import MainInfo from './MainInfo';
import MainPerformance from './MainPerformance';

const Main = () => {
    return (
        <main className='Main'>
            <MainVisual />
            <MainBusiness />
            <MainInfo />
            <MainPerformance />
        </main>
    )
}

export default Main