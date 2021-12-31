import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Newsletter from '../../components/Newsletter/Newsletter';
import TopBar from '../../components/TopBar/TopBar';
import { AddContainer, Amount, AmountContainer, Button, Desc, Filter, FilterColor, FilterContainer, FilterSize, FilterSizeOption, FilterTitle, Image, ImgContainer, InfoContainer, Price, Title, Wrapper } from './SingleProductStyle';

const SingleProduct = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Header></Header>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.
                    </Desc>
                    <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="gray" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default SingleProduct;