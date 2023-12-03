import React from 'react';

import './App.css';
import './responsive.css'
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.js';
import SingleProduct from './screens/SingleProduct.js';
import Login from './screens/Login.js';
import Register from './screens/Register.js';
import CartScreen from './screens/CartScreen.js';
import ShippingScreen from './screens/ShippingScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import PaymentScreen from './screens/PaymentScreen.js';
import PlaceOrderScreen from './screens/PlaceOrderScreen.js';
import OrderScreen from './screens/OrderScreen.js';
import NotFound from './screens/NotFound.js';
// import Product from './Product.js';
// import AddProduct from './AddProduct.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path= '/' Component={HomeScreen} exact></Route>
        <Route path= '/products/:id' Component={SingleProduct} ></Route>
        <Route path= '/login' Component={Login} ></Route>
        <Route path= '/register' Component={Register} ></Route>
        <Route path= '/profile' Component={ProfileScreen} ></Route>
        <Route path= '/cart/:id?' Component={CartScreen} ></Route>
        <Route path= '/shipping' Component={ShippingScreen} ></Route>
        <Route path= '/payment' Component={PaymentScreen} ></Route>
        <Route path= '/placeorder' Component={PlaceOrderScreen} ></Route>
        <Route path= '/order' Component={OrderScreen} ></Route>
        <Route path= '*' Component={NotFound} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
