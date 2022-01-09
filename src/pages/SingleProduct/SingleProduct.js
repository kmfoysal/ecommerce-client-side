import { Add, Remove } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Newsletter from '../../components/Newsletter/Newsletter';
import TopBar from '../../components/TopBar/TopBar';
import { publicRequest } from '../../requestMethod';
import { AddContainer, Amount, AmountContainer, Button, Desc, Filter, FilterColor, FilterContainer, FilterSize, FilterSizeOption, FilterTitle, Image, ImgContainer, InfoContainer, Price, Title, Wrapper } from './SingleProductStyle';

const SingleProduct = () => {
    const location = useLocation();
    const productId = location.pathname.split('/')[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);


  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/singleproduct/" + productId);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [productId]);


  const handleQuantity = (type)=>{
    if (type === "dec") {
        quantity > 1 && setQuantity(quantity - 1);
      } else {
        setQuantity(quantity + 1);
      }
  }

    return (
        <div>
            <TopBar></TopBar>
            <Header></Header>
            <Wrapper>
                <ImgContainer>
                    <Image src= {product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>
                        {product.desc}
                    </Desc>
                    <Price>$ {product.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.color?.map((c) =>(
                            <FilterColor color={c} key={c} />
                        ))}
                        
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            {product.size?.map((s)=>(
                                <FilterSizeOption size={s} key={s}>{s}</FilterSizeOption>
                            ))}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick = {()=>handleQuantity('dec')} />
                        <Amount>{quantity}</Amount>
                        <Add onClick = {()=>handleQuantity('inc')} />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default SingleProduct;