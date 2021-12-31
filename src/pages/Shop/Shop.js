import React from 'react';
import FeaturedProducts from '../../components/FeadturedProducts/FeaturedProducts';
import { Title } from '../../components/FeadturedProducts/FeaturedProductsStyle';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Newsletter from '../../components/Newsletter/Newsletter';
import TopBar from '../../components/TopBar/TopBar';
import { Filter, FilterContainer, FilterText, Option, Select } from './ShopStyle';

const Shop = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Header></Header>
            <Title style={{margin: '30px 0'}}>All Products</Title>
            <FilterContainer>
                <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
                    Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                    Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
                </Filter>
                <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
                </Filter>
            </FilterContainer>
            <FeaturedProducts></FeaturedProducts>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Shop;