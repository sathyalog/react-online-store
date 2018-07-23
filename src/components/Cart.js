import React from 'react';
import Navbar from './Navbar';
//import Order from './Order';
import Paper from '@material-ui/core/Paper';
class Cart extends React.Component {
    render() {
        const cartIds = Object.keys(this.props.cartDetails);
        return (
            <div className="cart">
                <Paper style={{ padding: '20px' }} elevation={1}>
                {cartIds}
                    This is Cart Page!!    
                </Paper>
            </div>
        );
    }
}

export default Cart;