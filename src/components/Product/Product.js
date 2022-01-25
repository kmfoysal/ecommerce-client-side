import { FavoriteBorderOutlined, LinkOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to={`/product/${product._id}`}>
                            <LinkOutlined></LinkOutlined>
                        </Link>
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>
                </Info>
            </Container>
            <h3>{product.title}</h3>
            <h4 style={{color:'orange'}}>${product.price}</h4>
        </div>
    );
};

export default Product;