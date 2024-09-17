import React, { createContext } from 'react';
import all_product from '../api/all_product'; // Assuming this imports the product data

// Create the context
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    // Define the context value to be passed
    const contextValue = { all_product };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
