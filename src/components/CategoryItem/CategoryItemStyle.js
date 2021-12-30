import styled from "styled-components";

export const Container = styled.div`
height: 70vh;
position: relative;

`;

export const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
  
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h4`
  font-size: 30px;
  text-transform: uppercase;
  color: #fff;
`;

export const Button = styled.button`
font-size: 16px;
color: #202020;
font-weight: 500;
padding: 13px 20px;
background-color: #fff;
border: none;
margin-top: 20px;
  
`;