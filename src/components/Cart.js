import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {formatPrice} from '../helpers';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class Cart extends React.Component {
  state = {
    items: {}
}
  componentDidUpdate(prevProps) {
    if(this.props.items !== prevProps.items){
      console.log(this.props.items)
      this.setState({items:this.props.items});
    }
  }
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
        },
        total:{
          fontSize:'12px', 
          fontWeight:'500'
        },
        alignRight: {
          float: 'right'
        }
        
      }
        
        const image  = this.props.image;
        //const itemsDB = Object.entries(this.state.items);
        const items = Object.entries(this.props.details);
        const orderIds = Object.keys(this.props.details);
        const total = orderIds.reduce((prevTotal,key)=>{
          const item = this.props.items[key];
          const count = this.props.details[key];
          const isAvailable = item && item.status === 'available';
          if(isAvailable) {
            return prevTotal + (count.quantity * item.price);
          }
          return prevTotal;
        },0);

        // const itemUpdate = items.reduce((prevItem,key)=>{
        //   console.log(prevItem)
        //   const item = this.props.items[key];
        //   console.log(item);
        //   return item;
        // },0);
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
                <Table style={styles.cartcontent}>
                  <TableBody>
                  {items.map(function(item,i){
                        return <TableRow key={i}>
                        <TableCell style={styles.td}>
                        <i className="material-icons" style={styles.removeicon}>remove_circle_outline</i>
                        </TableCell>
                        <TableCell style={styles.td}><img
                          style={styles.cover}
                          src={image}
                          alt="Product"
                        /></TableCell>
                        {item[1].details && item[1].details.status === 'available' ? <TableCell style={styles.td}>
                          <div>
                          <span>
                            {item[1].details.name}
                          </span><br/>
                          Quantity: {item[1].quantity}
                          </div>
                        </TableCell> : <TableCell style={styles.td}>
                           {item? item[1].details.name : 'item'} is <br/>  no longer available
                        </TableCell>}
                        
                        <TableCell style={styles.td}>{item[1].details.status === 'available' ? formatPrice(item[1].details.price * item[1].quantity): formatPrice(0)}</TableCell>
                        </TableRow>
                    })}
                    <div style={styles.alignRight}>
                    <TableCell style={styles.total}>
                        Total: {formatPrice(total)}
                    </TableCell>       
                    </div>
                  </TableBody>     
                </Table>
              </div>
            </Card>
          </div>     
        );
    }
}

export default Cart;