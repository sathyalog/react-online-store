import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import Inventory from './Inventory';
import Navbar from './Navbar';
import NotFound from './NotFound';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()

const Router = (props) => (
    <BrowserRouter history={history}>
    <React.Fragment>
    <Navbar/>    
    <Switch>
            <Route exact path="/" component={StorePicker} />
            <Route path="/store/:storeId" exact component={App} />
            <Route path="/:storeId/inventory"  exact component={Inventory} />
            <Route path="*" component={NotFound} />
    </Switch>
    </React.Fragment>
    </BrowserRouter>
);

export default Router;