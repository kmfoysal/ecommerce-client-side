import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { registration } from '../../redux/apiCalls';
import { Agreement, Button, Container, Form, Input, NameInput, Title, Wrapper } from './RegistrationStyle';

const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        registration(dispatch, { name, email, userName, password });
      };

    return (
        <div>
            <Header></Header>
             <Container>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form>
                        <NameInput placeholder="name" type='text' onChange={(e) => setName(e.target.value)} />
                        <Input placeholder="username" type='text' onChange={(e) => setUserName(e.target.value)}/>
                        <Input placeholder="email" type='email' onChange={(e) => setEmail(e.target.value)}/>
                        <Input placeholder="password" type='password' onChange={(e) => setPassword(e.target.value)}/>
                        <Agreement>
                            By creating an account, I consent to the processing of my personal
                            data in accordance with the <b>PRIVACY POLICY</b>
                        </Agreement>
                        <Button onClick={handleClick}>CREATE</Button>
                    </Form>
                    <Link to='/login'>ALREADY HAVE ACCOUNT ?</Link>
                </Wrapper>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Registration;