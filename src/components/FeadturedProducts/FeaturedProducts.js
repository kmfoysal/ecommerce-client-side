import React from 'react';
import { featuredProducts } from '../../data';
import Product from '../Product/Product';
import { Container, Title, Wrapper } from './FeaturedProductsStyle';

const FeaturedProducts = () => {
    return (
        <div>
            <Container>
                <Title>Featured Products</Title>
                <Wrapper>
                    {
                        featuredProducts.map(product => <Product product={product} key={product.id}>

                                                         </Product>)
                    }
                </Wrapper>
            </Container>
        </div>
    );
};

export default FeaturedProducts;