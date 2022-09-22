import React from 'react';
import MainBusiness from './MainBusiness';
import MainInfo from './MainInfo';
import MainPerformance from './MainPerformance';
import MainBanner from './MainBanner';

const Main = () => {
    return (
        <main className='Main'>
            <MainBusiness />
            <MainInfo />
            <MainPerformance />
            <MainBanner />
        </main>
    )
}

export default Main