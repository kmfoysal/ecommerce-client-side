import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import { Center, Container, Input, Language, Left, Logo, MenuItem, Right, SearchContainer, Wrapper } from './HeaderStyles';

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search'></Input>
                        <SearchOutlined></SearchOutlined>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>E-SHOP</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartOutlined color="action"></ShoppingCartOutlined>
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Header;