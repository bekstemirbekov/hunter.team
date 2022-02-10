import { Box, Grid } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productContext } from '../../../Contexts/ProductContext';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
    const {products, getProducts} = useContext(productContext)
    const navigate = useNavigate()

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <Box sx={{flexGrow: 1, margin: 4}}>
            <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                {
                  products ? (
                      products.map((item,index)=> (
                        <Grid key={{index}} item xs ={2} sm={4} md={4}>
                            <ProductCard item={item}/>
                        </Grid>
                      )) 
                  ) : (<h1>...Loading</h1>)
                }
              


            </Grid>
        </Box>
    );
};

export default ProductList;