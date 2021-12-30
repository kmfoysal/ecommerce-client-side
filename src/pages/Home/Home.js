import React from 'react';
import Categories from '../../components/Categories/Categories';
import FeaturedProducts from '../../components/FeadturedProducts/FeaturedProducts';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import TopBar from '../../components/TopBar/TopBar';

const Home = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Header></Header>
            <Slider></Slider>
            <Categories></Categories>
            <FeaturedProducts></FeaturedProducts>
        </div>
    );
};

export default Home;