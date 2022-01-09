import React from 'react';
import { Link } from 'react-router-dom';
import { Agreement, Button, Container, Form, Input, Title, Wrapper } from './RegistrationStyle';

const Registration = () => {
    return (
        <div>
             <Container>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form>
                        <Input placeholder="first name" />
                        <Input placeholder="last name" />
                        <Input placeholder="username" />
                        <Input placeholder="email" />
                        <Input placeholder="password" />
                        <Input placeholder="confirm password" />
                        <Agreement>
                            By creating an account, I consent to the processing of my personal
                            data in accordance with the <b>PRIVACY POLICY</b>
                        </Agreement>
                        <Button>CREATE</Button>
                    </Form>
                    <Link to='/login'>ALREADY HAVE ACCOUNT ?</Link>
                </Wrapper>
            </Container>
        </div>
    );
};

export default Registration;