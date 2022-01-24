import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../redux/userRedux';
import { Center, Container, Input, Language, Left, Logo, MenuItem, Right, SearchContainer, Wrapper } from './HeaderStyles';

const Header = () => {
    const quantity = useSelector(state=>state.cart.quantity);
    const dispatch = useDispatch();
    const history = useHistory();


    const handleClick = () => {
        dispatch(logout());
        history.push('/login')
      };
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
                    <MenuItem onClick={handleClick}>SIGN OUT</MenuItem>
                    <Link to='/cart'>
                        <MenuItem>
                            <Badge badgeContent={quantity} color="secondary">
                                <ShoppingCartOutlined color="action"></ShoppingCartOutlined>
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Header;