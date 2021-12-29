import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
`;

export const Arrow = styled.div`

    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${(props)=> props.direction === 'left' && '10px'};
    right: ${(props)=> props.direction === 'right' && '10px'};
    cursor: pointer;
    opacity: 0.8;
    z-index: 2;
`;

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
`;

export const ImgContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const Image = styled.img`
  height: 80%;
`;


export const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

export const Title = styled.h1`
    font-size: 60px;
    text-transform: uppercase;
`;

export const Desc = styled.p`
    font-size: 20px;
    margin: 50px 0;
    line-height: 1.7;
    letter-spacing: 2px;
    text-transform: uppercase;
`;

export const Button = styled.button`
    background: linear-gradient(180deg, #ff589b -0.01%, #ff136f 99.99%);
    border: none;
    border-radius: 5px;
    padding: 12px 20px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;

`;