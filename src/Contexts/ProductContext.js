import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import { API } from '../Helpers/Constants';

export const productContext = createContext()
    const INIT_STATE = {
        products: null
    }


const  reduser = (state= INIT_STATE, action) => {
    switch(action.type){
        case 'GET_PRODUCTS' :
        return {...state, products: action.payload.data}
            default:
                return state
    }
}

const ProductContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reduser, INIT_STATE)
    
    const addProduct = async (newProduct) => {
        try {
            await axios.post(API, newProduct)
            getProducts()
        } catch (error) {
            alert(error)
            
        }
    }

    const getProducts = async () => {
        try {
            let res = await axios(`${API}/${window.location.search}`)
            let action = {
                type: 'GET_PRODUCTS',
                payload: res
            }
            dispatch(action)
        } catch (error) {
            alert(error);
        }
    }
    return (
        <productContext.Provider value={{
            addProduct,
            getProducts
        }}>
           {children} 
        </productContext.Provider>
    );
};

export default ProductContextProvider;