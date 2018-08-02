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
                <Cart image={this.props.image}
                    details={this.state.order} />
            </CartContext.Provider>
        );
    }
}
export default Order;