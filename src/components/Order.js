import React from 'react';
import Cart from './Cart';
import {CartContext} from './CartContext';

class Order extends React.Component {
    state = {
        order:{}
    }
    componentDidUpdate(prevProps) {
        if(this.props.orderDetails !== prevProps.orderDetails){
            this.setState({order:this.props.orderDetails})
        }
    }
    render() {
        return (
            <CartContext.Provider value={this.state}>
                <Cart/>
            </CartContext.Provider>
        );
    }
}
export default Order;