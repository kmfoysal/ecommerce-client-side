import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { logout } from '../../redux/userRedux';
import { Center, Container, Input, Language, Left, Logo, MenuItem, Right, SearchContainer, Wrapper } from './HeaderStyles';

const Header = () => {
    const quantity = useSelector(state=>state.cart.quantity);
    const user = useSelector(state=>state.user.currentUser);
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
                    <NavLink to='/' style={{textDecoration:'none'}}>
                        <Logo>E-SHOP</Logo>
                    </NavLink>
                </Center>
                <Right>
                    <NavLink to='/' style={{textDecoration:'none'}}>
                        <MenuItem>HOME</MenuItem>
                    </NavLink>
                    {user ? <MenuItem onClick={handleClick}>SIGN OUT</MenuItem>
                    :     
                    <NavLink to='/login' style={{textDecoration:'none'}}>
                        <MenuItem>SIGN IN</MenuItem>
                    </NavLink>
                    }
                    {/* {
                    user.isAdmin && <NavLink to='/dashboard' style={{textDecoration:'none'}}>
                                        <MenuItem>DASHBOARD</MenuItem>
                                    </NavLink>
                    } */}
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