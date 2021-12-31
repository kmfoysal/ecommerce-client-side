import React from 'react';
import { featuredProducts } from '../../data';
import Product from '../Product/Product';
import { Container, Wrapper } from './FeaturedProductsStyle';

const FeaturedProducts = () => {
    return (
        <div>
            <Container>
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