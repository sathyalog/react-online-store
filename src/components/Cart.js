import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {formatPrice} from '../helpers';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Cart extends React.Component {
    render() {
      const styles = {
        cover: {
          width: 60,
          height: 60,
        },
        removeicon: {
          fontSize:'18px', 
          flex:1
        },
        cartcontent:{
          margin:'5px 20px', 
          display:'flex'
        },
        cartproperties:{
          margin:'20px 0',
          right:'5px',
          position:'fixed'
        },
        td: {
          padding: '5px'
        }
        
      }
        
        const image  = this.props.image;
        
        const items = Object.entries(this.props.details)
        console.log(items)
        return (
            <div style={styles.cartproperties}>
            <Card>
              <div className="">
                <CardContent className="">
                  <Typography variant="headline">Cart</Typography>
                  <Typography variant="subheading" color="textSecondary">
                    Your Orders
                  </Typography>
                </CardContent>
                <div style={styles.cartcontent}>
                  <ul style={{listStyleType:'none',padding: 0}}>
                  {items.map(function(item,i){
                        return <li key={i}>
                        <TableRow>
                        <TableCell style={styles.td}>
                        <i className="material-icons" style={styles.removeicon}>remove_circle_outline</i>
                        </TableCell>
                        <TableCell style={styles.td}><img
                          style={styles.cover}
                          src={image}
                          alt="Product"
                        /></TableCell>
                        {/* <div style={{display:'inline-block'}}> */}
                        <TableCell style={styles.td}>
                          <div>
                          <span>
                            {item[1].details.name}
                          </span><br/>
                          Quantity: {item[1].quantity}
                          </div>
                        
                        </TableCell>
                        <TableCell style={styles.td}>{formatPrice(item[1].details.price * item[1].quantity)}</TableCell>      
                        </TableRow>
                        </li>
                    })}
                  </ul>  
                   
                </div> 
                
                
              </div>
              
            </Card>
          </div>
                
        );
    }
}

export default Cart;