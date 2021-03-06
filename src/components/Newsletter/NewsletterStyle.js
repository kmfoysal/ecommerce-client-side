import styled from "styled-components";
import { mobile } from "../../responsiveStyle";

export const Container = styled.div`
  /* height: 50vh; */
  padding: 50px 0;
  background-color: #f5fafd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.h2`
  font-size: 60px;
  margin-bottom: 30px;
  ${mobile({ fontSize:'32px' })}

`;

export const Desc = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;

`;

export const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width:'80%' })}

`;

export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  ${mobile({ flex:'2' })}

`;