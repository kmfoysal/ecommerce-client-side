import React from 'react';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import TopBar from '../../components/TopBar/TopBar';

const Home = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Header></Header>
            <Slider></Slider>
        </div>
    );
};

export default Home;