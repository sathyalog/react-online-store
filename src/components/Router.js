import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import Cart from './Cart';
import Navbar from './Navbar';
import NotFound from './NotFound';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

const Router = () => (
    <BrowserRouter history={history}>
    <div>
    <Navbar/>    
    <Switch>
            <Route exact path="/" component={StorePicker} />
            <Route path="/store/:storeId" component={App} />
            <Route path="/cart" component={Cart} />
            <Route component={NotFound} />
    </Switch>
    </div>
    </BrowserRouter>
);

export default Router;