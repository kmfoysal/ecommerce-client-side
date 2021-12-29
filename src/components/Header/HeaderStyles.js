import styled from "styled-components";

export const Container = styled.div`

    height: 60px;
    display: flex;
    align-items: center;
    background-color: #ccc;

`;

export const Wrapper = styled.div`
   width: 100%;
   padding: 10px 20px;
   display: flex;
   justify-content: space-between;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
   font-size: 14px;
   cursor: pointer;
`;

export const SearchContainer = styled.div`
   display: flex;
   align-items:center;
   margin-left: 25px;
   border-top:none;
   border-right: none;
   border-left: none;
   border-bottom: 1px solid;
`;

export const Input = styled.input`
   border: none;
   box-shadow: none;
   outline: none;
   background-color: transparent;
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Logo = styled.h1`
  font-weight: bold;
  font-size: 32px;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const MenuItem = styled.div`
  font-size:14px;
  margin-left: 25px;
  cursor: pointer;
`;