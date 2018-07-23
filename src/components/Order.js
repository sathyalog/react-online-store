import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import Paper from '@material-ui/core/Paper';
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
            <div className="order">
               <Cart cartDetails={this.props.orderDetails}/>
            </div>
        );
    }
}

export default Order;