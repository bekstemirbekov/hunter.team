import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPorduct from './Components/Admin/AddProduct/AddProduct';
import Home from './Components/Home'
import ProductContextProvider from './Contexts/ProductContext';

const MyRoutes = () => {
    return (
        <ProductContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/add' element={<AddPorduct/>}/>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </BrowserRouter>   
        </ProductContextProvider>
    );
};

export default MyRoutes;