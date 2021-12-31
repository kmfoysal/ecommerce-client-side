import React from 'react';
import { Button, Container, Form, Input, Link, Title, Wrapper } from './LoginStyle';

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
                        <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                        <Link>CREATE A NEW ACCOUNT</Link>
                    </Form>
                </Wrapper>
            </Container>
        </div>
    );
};

export default Login;