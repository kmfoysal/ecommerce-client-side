import React from 'react';
import Categories from '../../components/Categories/Categories';
import FeaturedProducts from '../../components/FeadturedProducts/FeaturedProducts';
import { Title } from '../../components/FeadturedProducts/FeaturedProductsStyle';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Newsletter from '../../components/Newsletter/Newsletter';
import Slider from '../../components/Slider/Slider';
import TopBar from '../../components/TopBar/TopBar';

const Home = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Header></Header>
            <Slider></Slider>
            <Categories></Categories>
            <Title>Featured Products</Title>
            <FeaturedProducts></FeaturedProducts>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;