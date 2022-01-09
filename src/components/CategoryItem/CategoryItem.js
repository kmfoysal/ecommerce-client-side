import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Img, Info, Title } from './CategoryItemStyle';

const CategoryItem = ({category}) => {
    return (
        <div>
            <Container>
                <Img src={category.img}></Img>
                <Info>
                    <Title>
                        {category.title}
                    </Title>
                    <Link to={`/products/${category.cat}`}>
                        <Button>SHOP NOW</Button>
                    </Link>
                </Info>
            </Container>
        </div>
    );
};

export default CategoryItem;