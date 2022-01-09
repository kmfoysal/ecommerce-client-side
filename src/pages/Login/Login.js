import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Input, Title, Wrapper } from './LoginStyle';

const Login = () => {
    return (
        <div>
             <Container>
                <Wrapper>
                    <Title>SIGN IN</Title>
                    <Form>
                        <Input placeholder="username" />
                        <Input placeholder="password" />
                        <Button>LOGIN</Button>
                        <Link style={{marginBottom: '10px'}}>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                        <Link to='/registration'>CREATE A NEW ACCOUNT</Link>
                    </Form>
                </Wrapper>
            </Container>
        </div>
    );
};

export default Login;