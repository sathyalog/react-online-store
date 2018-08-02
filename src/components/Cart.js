import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {formatPrice} from '../helpers';

class Cart extends React.Component {
    render() {
      const styles = {
        cover: {
          width: 60,
          height: 60,
        },
        removeicon: {
          fontSize:'18px', 
          flex:1, 
          height:'40px',
          lineHeight:'40px', 
          textAlign:'center', 
          margin:'10px'
        },
        cartcontent:{
          margin:'5px 20px', 
          display:'flex'
        },
        cartproperties:{
          margin:'20px 0',
          right:'5px',
          position:'fixed'}
        
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
                        <div>
                        <i className="material-icons" style={styles.removeicon}>remove_circle_outline</i>
                        <img
                          style={styles.cover}
                          src={image}
                          alt="Product"
                        />
                        <div style={{display:'inline-block'}}>
                        <span>{item[1].details.name}</span>
                        <span>{formatPrice(item[1].details.price)}</span><br/>
                        <span>Quantity: {item[1].quantity}</span>
                        </div>
                        </div>
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