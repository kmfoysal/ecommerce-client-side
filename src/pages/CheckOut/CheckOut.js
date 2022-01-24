import { Add, Remove } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import TopBar from '../../components/TopBar/TopBar';
import { clearCart } from '../../redux/cartRedux';
import { userRequest } from "../../requestMethod";
import { Bottom, Button, Container, Details, Hr, Image, Info, PriceDetail, Product, ProductAmount, ProductAmountContainer, ProductColor, ProductDetail, ProductId, ProductName, ProductPrice, ProductSize, Summary, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle, Title, Top, TopButton, TopText, TopTexts, Wrapper } from './CheckOutStyle';

const KEY = process.env.REACT_APP_STRIPE_KEY;

const CheckOut = () => {
    const cart = useSelector(state=>state.cart);
    const cartQuantity = useSelector(state=>state.cart.quantity);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();
    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(1);

    const handleClick = () => {
        dispatch(clearCart());
      };

    const handleQuantity = (type)=>{
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
          } else {
            setQuantity(quantity + 1);
          }
      };


    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
          try {
            const res = await userRequest.post("/payment", {
              tokenId: stripeToken.id,
              amount: 500,
            });
            history.push("/success", {
              stripeData: res.data,
              products: cart, });
          } catch {}
        };
        stripeToken && makeRequest();
      }, [stripeToken, cart, history]);
    return (
        <div>
            <Container>
                <TopBar></TopBar>
                <Header></Header>
                <Wrapper>
                    <Title>YOUR BAG</Title>
                    <Top>
                        <Link to='/'>
                            <TopButton>CONTINUE SHOPPING</TopButton>
                        </Link>
                        <TopTexts>
                            <TopText>Shopping Bag({cartQuantity})</TopText>
                            <TopText>Your Wishlist (0)</TopText>
                        </TopTexts>
                        <TopButton type="filled" onClick={handleClick}>CLEAR CART</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                            {cart.products.map((product)=>(
                            <Product>
                                <ProductDetail>
                                    <Image src= {product.img} />
                                    <Details>
                                    <ProductName>
                                        <b>Product:</b> {product.title}
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> {product._id}
                                    </ProductId>
                                    <ProductColor color={product.color} />
                                    <ProductSize>
                                        <b>Size:</b> {product.size}
                                    </ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                    <Remove onClick = {()=>handleQuantity('dec')} />
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Add onClick = {()=>handleQuantity('inc')} />
                                    </ProductAmountContainer>
                                    <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                                </PriceDetail>
                            </Product>
                            ))}
                            <Hr />
                        </Info>
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                            </SummaryItem>
                            <Hr />
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                            </SummaryItem>
                            <StripeCheckout
                                name="E-STORE"
                                image="https://avatars.githubusercontent.com/u/62801232?s=96&v=4"
                                billingAddress
                                shippingAddress
                                description={`Your total is $${cart.total}`}
                                amount={cart.total * 100}
                                token={onToken}
                                stripeKey={KEY}
                                >
                                <Button>CHECKOUT NOW</Button>
                            </StripeCheckout>
                        </Summary>
                    </Bottom>
                </Wrapper>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default CheckOut;