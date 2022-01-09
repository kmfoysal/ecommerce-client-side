import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { Container, Wrapper } from './FeaturedProductsStyle';

const FeaturedProducts = ({cat, filters, sort}) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
          try {
            const res = await axios.get(
              cat
                ? `http://localhost:5000/allproducts?category=${cat}`
                : "http://localhost:5000/allproducts"
            );
            setProducts(res.data);
          } catch (err) {}
        };
        getProducts();
      }, [cat]);


      useEffect(() => {
        cat &&
          setFilteredProducts(
            products.filter((product) =>
              Object.entries(filters).every(([key, value]) =>
              product[key].includes(value)
              )
            )
          );
      }, [products, cat, filters]);


      useEffect(() => {
        if (sort === "newest") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.createdAt - b.createdAt)
          );
        } else if (sort === "asc") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.price - b.price)
          );
        } else {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => b.price - a.price)
          );
        }
      }, [sort]);
    

    return (
        <div>
            <Container>
                <Wrapper>
                    { cat
                        ? filteredProducts.map(product => <Product product={product} key={product.id}>

                                                         </Product>)
                        : products.slice(0,8).map(product => <Product product={product} key={product.id}>

                            </Product>)
                    }
                </Wrapper>
            </Container>
        </div>
    );
};

export default FeaturedProducts;