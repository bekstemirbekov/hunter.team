import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import EditProduct from './Components/Admin/EditProduct/EditProduct';
import Home from './Components/Home/Home';
import ProductsContextProvider from './Contexts/ProductsContext';
import MyNavbar from './Components/Admin/Header/MyNavbar'
import ProductDetail from './Components/Product/ProductDetail/ProductDetail';
import Register from './Components/Auth/Register/Register';
import Login from './Components/Auth/Login/Login'
import AddProduct from './Components/Admin/AddProduct/AddProduct';
import Cart from './Components/Admin/Cart/Cart';

const MyRoutes = () => {
    return (
        <ProductsContextProvider>
             <BrowserRouter>
             <MyNavbar/>
            <Routes>
                <Route path='/add' element={<AddProduct/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/edit/:id' element={<EditProduct/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/detail/:id' element={<ProductDetail/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
        </ProductsContextProvider>
       
    );
};

export default MyRoutes;