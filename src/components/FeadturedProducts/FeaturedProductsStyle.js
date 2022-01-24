import styled from "styled-components";
import { mobile } from "../../responsiveStyle";

export const Container = styled.div`
  padding: 0px 30px 50px 30px;
`;

export const Title = styled.h3`
   font-size: 40px;
   text-transform: uppercase;
   letter-spacing: 2px;
   text-align: center;
   margin-bottom: 50px;
  ${mobile({ fontSize:'30px' })}

`;

export const Wrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 4fr);
   gap: 30px;
  ${mobile({ gridTemplateColumns: 'repeat(1, 1fr)' })}

`;