import styled from "styled-components";

export const Container = styled.div`
padding: 50px;
background-color: #E9E8E6;
display: flex;

`;

export const Title = styled.h3`
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export const Left = styled.div`
flex: 1;

`;

export const Logo = styled.h1`

`;

export const Desc = styled.div`
  font-size: 16px;
  line-height: 1.5;
  margin: 20px 0;
  padding-right: 50px;
  color: #acacac;
`;

export const Payment = styled.img`
  width: 50%;
`;

export const UsefulLinks = styled.div`
  flex: 1;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const ListItem = styled.li`
margin-bottom: 15px;
color: #acacac;
  
`

export const Privacy = styled.div`
flex: 1;

`;

export const Right = styled.div`
flex: 1;

`;


export const ContactItem = styled.div`
display: flex;
align-items: center;
margin-bottom: 15px;
color: #acacac;
`;

export const SocialContainer = styled.div`
  display: flex;
  padding-top: 10px;
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
