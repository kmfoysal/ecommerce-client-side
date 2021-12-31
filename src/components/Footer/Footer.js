import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import React from 'react';
import { ContactItem, Container, Desc, Left, List, ListItem, Logo, Payment, Privacy, Right, SocialContainer, SocialIcon, Title, UsefulLinks } from './FooterStyle';

const Footer = () => {
    return (
        <div>
            <Container>
                <Left>
                    <Logo>E-SHOP</Logo>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quasi, eaque dicta quod ipsam iure veritatis maxime nostrum deserunt recusandae.
                    </Desc>
                    <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
                </Left>
                <UsefulLinks>
                    <Title>Useful Links</Title>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>My Account</ListItem>
                        <ListItem>Order Tracking</ListItem>
                    </List>
                </UsefulLinks>
                <Privacy>
                    <Title>Legal & Privacy</Title>
                    <List>
                        <ListItem>Terms & Conditions</ListItem>
                        <ListItem>Privacy Policy</ListItem>
                        <ListItem>Shipping</ListItem>
                        <ListItem>Returns</ListItem>
                    </List>
                </Privacy>
                <Right>
                    <Title>Contact Info</Title>
                    <ContactItem>
                        <Room style={{marginRight:"10px"}}/> #25, Sector - 13, Uttara, Dhaka
                    </ContactItem>
                    <ContactItem>
                        <Phone style={{marginRight:"10px"}}/> +8801613472285
                    </ContactItem>
                    <ContactItem>
                        <MailOutline style={{marginRight:"10px"}} /> contact.kmfoysal@gmail.com
                    </ContactItem>
                    <SocialContainer>
                        <SocialIcon color="3B5999">
                            <Facebook />
                        </SocialIcon>
                        <SocialIcon color="E4405F">
                            <Instagram />
                        </SocialIcon>
                        <SocialIcon color="55ACEE">
                            <Twitter />
                        </SocialIcon>
                        <SocialIcon color="E60023">
                            <Pinterest />
                        </SocialIcon>
                    </SocialContainer>
                </Right>
            </Container>
        </div>
    );
};

export default Footer;