import styled from "styled-components";
import { mobile } from "../../responsiveStyle";

export const Container = styled.div`
  padding: 50px 30px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  ${mobile({ gridTemplateColumns: 'repeat(1, 1fr)' })}
`;

export const Title = styled.h2`
  font-size: 40px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 50px;
  ${mobile({ fontSize:'32px' })}

`;