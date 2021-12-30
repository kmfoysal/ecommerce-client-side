import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 30px;
`;

export const Title = styled.h3`
   font-size: 40px;
   text-transform: uppercase;
   letter-spacing: 2px;
   text-align: center;
   margin-bottom: 50px;
`;

export const Wrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 4fr);
   gap: 30px;
`;