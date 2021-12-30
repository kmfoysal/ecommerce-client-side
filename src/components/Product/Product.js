import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import { Circle, Container, Icon, Img, Info } from './ProductStyle';

const Product = ({product}) => {
    return (
        <div>
            <Container>
                <Circle></Circle>
                <Img src={product.img}></Img>
                <Info>
                    <Icon>
                        <ShoppingCartOutlined />
                    </Icon>
                    <Icon>
                        <SearchOutlined />
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>
                </Info>
            </Container>
        </div>
    );
};

export default Product;