import React from 'react';
import Parts from './Parts';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <BussinessSummary/>
        </div>
    );
};

export default Home;