import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import FeaturedProducts from '../../components/FeadturedProducts/FeaturedProducts';
import { Title } from '../../components/FeadturedProducts/FeaturedProductsStyle';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Newsletter from '../../components/Newsletter/Newsletter';
import TopBar from '../../components/TopBar/TopBar';
import { Filter, FilterContainer, FilterText, Option, Select } from './ShopStyle';

const Shop = () => {
    const location = useLocation();
    const cat = location.pathname.split('/')[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('Newest');

    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    }
    return (
        <div>
            <TopBar></TopBar>
            <Header></Header>
            <Title style={{margin: '30px 0'}}>{cat}</Title>
            <FilterContainer>
                <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name='color' onChange={handleFilters}>
                    <Option disabled>
                    Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select name='size' onChange={handleFilters}>
                    <Option disabled>
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
                <Select onChange={(e)=>setSort(e.target.value)}>
                    <Option value= 'newest'>Newest</Option>
                    <Option value= 'asc'>Price (asc)</Option>
                    <Option value= 'desc'>Price (desc)</Option>
                </Select>
                </Filter>
            </FilterContainer>
            <FeaturedProducts cat={cat} filters={filters} sort={sort} ></FeaturedProducts>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Shop;