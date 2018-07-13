import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>React Online Store</Link>
                    </Typography>
                    <div style={{ marginLeft: 'auto', order: '2' }}>
                        <Button color="inherit" style={{ fontSize: '12px' }}>Login</Button>
                        <Icon color="action">
                            <i className="material-icons md-light" style={{ color: 'white', verticalAlign: 'middle', position: 'absolute', top: '22px', float: 'right', }}>search</i>
                        </Icon>
                        <Icon color="action">
                            {/* <Badge  badgeContent={4} color="primary"> */}
                            <i className="material-icons md-light" style={{ color: 'white', verticalAlign: 'middle', position: 'absolute', top: '22px', float: 'right', padding: '0 10px' }}><Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>shopping_cart</Link></i>
                            {/* </Badge> */}
                        </Icon>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;