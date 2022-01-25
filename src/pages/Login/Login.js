import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { login } from '../../redux/apiCalls';
import { Button, Container, Error, Form, Input, Title, Wrapper } from './LoginStyle';

const Login = () => {
    const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { userName, password });
  };
    return (
        <div>
            <Header></Header>
             <Container>
                <Wrapper>
                    <Title>SIGN IN</Title>
                    <Form>
                        <Input placeholder="username" onChange={(e) => setUserName(e.target.value)} />
                        <Input placeholder="password" type='password' onChange={(e) => setPassword(e.target.value)} />
                        <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                        {error && <Error>Something went wrong...</Error>}
                        <Link style={{marginBottom: '10px'}}>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                        <Link to='/registration'>CREATE A NEW ACCOUNT</Link>
                    </Form>
                </Wrapper>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;