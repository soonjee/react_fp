import React from 'react';
import MainVisual from './MainVisual';
import MainBusiness from './MainBusiness';
import MainInfo from './MainInfo';
import MainPerformance from './MainPerformance';
import MainBanner from './MainBanner';

const Main = () => {
    return (
        <main className='Main'>
            <MainVisual />
            <MainBusiness />
            <MainInfo />
            <MainPerformance />
            <MainBanner />
        </main>
    )
}

export default Main