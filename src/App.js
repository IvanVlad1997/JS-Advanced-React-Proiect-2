import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Page404 from './pages/Page 404/Page404';
import Category from './pages/Category/Category';
import Cart from './pages/Cart/Cart';
import './utils/utility-classes.css';
import Product from './pages/Product/Product';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import Favorite from './pages/Favorite/Favorite';

function App() {
  return(
    <div className="app">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/about" component={About}/>
        <Route path="/terms" component={TermsAndConditions} />
        <Route path ="/favorites" component = {Favorite} />
        <Route path="/category/:categoryName" component={Category}/>
        <Route path="/product/:productId" component={Product}/>
        <Route path="*" component={Page404}/>
      </Switch>
    </div>
  );
}

export default App;
