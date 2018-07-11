import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';


class App extends React.Component {
    state = {
        items: {},
        order: {}
    }
    addItem = (Item) => {
        //1. take a copy of existing state
        const items = {...this.state.items};
        //2. add our new items to the items variable
        items[`item${Date.now()}`] = Item;
        //3. set the new items to the state
        this.setState({
            items : items
        })
    }
    render() { 
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Groceries"/>
                </div>
                <Order/>
                <Inventory addItem = {this.addItem}/>
            </div>
        )
    }
}
 
export default App;