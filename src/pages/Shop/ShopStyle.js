import styled from "styled-components";
import { mobile } from "../../responsiveStyle";

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexWrap:'wrap' })}
`;

export const Filter = styled.div`
  margin: 30px;
  ${mobile({ margin:'10px' })}

`;

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

export const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
export const Option = styled.option``;