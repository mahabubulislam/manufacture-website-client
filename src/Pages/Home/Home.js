import React from 'react';
import Parts from './Parts';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import Discount from './Discount';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <Discount/>
            <BussinessSummary/>
        </div>
    );
};

export default Home;