import { Add, Remove } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Newsletter from '../../components/Newsletter/Newsletter';
import TopBar from '../../components/TopBar/TopBar';
import { addProduct } from '../../redux/cartRedux';
import { publicRequest } from '../../requestMethod';
import { AddContainer, Amount, AmountContainer, Button, Desc, Filter, FilterColor, FilterContainer, FilterSize, FilterSizeOption, FilterTitle, Image, ImgContainer, InfoContainer, Price, Title, Wrapper } from './SingleProductStyle';

const SingleProduct = () => {
    const location = useLocation();
    const productId = location.pathname.split('/')[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();


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
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };

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
                            <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                        ))}
                        
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange={(e) => setSize(e.target.value)}>
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
                    <Button onClick={handleClick}>ADD TO CART</Button>
                </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default SingleProduct;