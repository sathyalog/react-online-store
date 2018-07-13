import React from 'react';
import Navbar from './Navbar';
import Paper from '@material-ui/core/Paper';
class Order extends React.Component {
    render() {
        return (
            <div className="order">
                <Navbar />
                <Paper style={{ padding: '20px' }} elevation={1}>
                    This is Cart Page!!
                </Paper>
            </div>
        );
    }
}

export default Order;