import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withRouter } from 'react-router'
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";


class Navbar extends React.Component {
    getStoreName = () => {
        var storename = window.location.pathname.split("/").pop()
        return storename;
        
    }  
    render(){
        return (
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>React Online Store</Link>
                        </Typography>
                        <div style={{ marginLeft: 'auto', order: '2' }}>
                            <Button color="inherit" style={{ fontSize: '12px' }}>Login</Button>
                            {/* <Icon color="action">
                                <i className="material-icons md-light" style={{ color: 'white', verticalAlign: 'middle', position: 'absolute', top: '22px', float: 'right', }}>search</i>
                            </Icon> */}
                            <Icon color="action">
                                <i className="material-icons md-light" style={{ color: 'white', verticalAlign: 'middle', position: 'absolute', top: '22px', float: 'right', padding: '0 10px' }}>
                                { this.getStoreName()==='inventory' ? 'store_mall_directory' : <NavLink to={'/'+this.getStoreName()+'/inventory'} style={{ color: 'white', textDecoration: 'none' }}>store_mall_directory</NavLink>}
                                </i>
                            </Icon>
                        </div>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }
}

export default withRouter(Navbar);