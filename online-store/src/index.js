import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/ShopContext'; // Correct import of the ShopContextProvider

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ShopContextProvider> {/* Wrap the App inside the ShopContextProvider */}
    <App /> {/* App and all its child components will now have access to ShopContext */}
  </ShopContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
