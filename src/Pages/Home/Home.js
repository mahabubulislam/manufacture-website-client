import React from 'react';
import Parts from './Parts';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import Discount from './Discount';
import FAQ from './FAQ';
import 'react-accessible-accordion/dist/fancy-example.css';
import Footer from '../Shared/Footer';
import Reviews from './Reviews';
const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <Discount/>
            <BussinessSummary/>
            <Reviews/>
            <FAQ/>
            <Footer/>
        </div>
    );
};

export default Home;