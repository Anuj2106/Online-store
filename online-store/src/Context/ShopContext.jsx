import React, { createContext, useState, useEffect } from 'react';
import all_product_data from '../api/all_product'; // Assuming this imports the product data

// Create the context
export const ShopContext = createContext(null);
const getDefaultcart=()=>{
    let cart ={};
    for (let index=0;index<all_product_data.length+1;index++){
        cart[index]=0;
    }
    return cart;
 }
const ShopContextProvider = (props) => {
    const [all_product, setAllProduct] = useState([]);

    useEffect(() => {
        // Simulate fetching products from API or external file
        // You can replace this with an actual API call
        const fetchProducts = async () => {
            try {
                // Assuming `all_product_data` is already a list of products, replace this with actual API call if necessary
                setAllProduct(all_product_data);
            } catch (error) {
                console.error("Failed to load products:", error);
            }
        };
        
        fetchProducts();
    }, []); // Empty dependency array to run once when the component mounts

    // Define the context value to be passed
    const [cartItems,setCartItems]=useState(getDefaultcart());
    const addTocart=(ItemId)=>{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
        console.log(cartItems);
        
    }
    const RemovefromCart=(ItemId)=>{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
    }
    const contextValue = { all_product ,cartItems,addTocart,RemovefromCart};

 console.log(cartItems);
 
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
