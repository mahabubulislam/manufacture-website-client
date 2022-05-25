import React from 'react';
import Parts from './Parts';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import Discount from './Discount';
import FAQ from './FAQ';
import 'react-accessible-accordion/dist/fancy-example.css';
const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <Discount/>
            <BussinessSummary/>
            <FAQ/>
        </div>
    );
};

export default Home;