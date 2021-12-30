import React from 'react';
import { categories } from '../../data';
import CategoryItem from '../CategoryItem/CategoryItem';
import { Container, Title, Wrapper } from './CategoriesStyle';

const Categories = () => {
    return (
        <div>
            <Container>
                <Title>Categories</Title>
                <Wrapper>
                {
                    categories.map(category => <CategoryItem category={category} key={category.id}>

                    </CategoryItem>)
                }
                </Wrapper>
            </Container>
        </div>
    );
};

export default Categories;