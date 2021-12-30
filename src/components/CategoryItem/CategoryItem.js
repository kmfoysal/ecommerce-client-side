import React from 'react';
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
                    <Button>SHOP NOW</Button>
                </Info>
            </Container>
        </div>
    );
};

export default CategoryItem;