import React from 'react';
import {CartContext} from './CartContext';

class Cart extends React.Component {
    render(props) {
        return (
                <CartContext.Consumer>
                {
                    ({ order}) => ( <span>{Object.keys(order)}</span>)
                } 
                </CartContext.Consumer> 
        );
    }
}

export default Cart;