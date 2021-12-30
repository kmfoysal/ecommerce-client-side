import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import React, { useState } from 'react';
import { sliderItems } from '../../data';
import { Arrow, Button, Container, Desc, Image, ImgContainer, InfoContainer, Slide, Title, Wrapper } from './SliderStyle';

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) =>{

        if(direction === 'right'){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0 )
        }

    }
    return (
        <div>
            <Container>
                <Arrow direction='left' onClick={()=>handleClick('left')}>
                    <ArrowLeft></ArrowLeft>
                </Arrow>
                <Wrapper slideIndex={slideIndex}>
                    {sliderItems.map((item)=>(
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                           <Image src={item.img}></Image>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>BUY NOW</Button>
                        </InfoContainer>
                    </Slide>
                    ))}
                </Wrapper>
                <Arrow direction='right' onClick={()=>handleClick('right')}>
                    <ArrowRight></ArrowRight>
                </Arrow>
            </Container>
        </div>
    );
};

export default Slider;