import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
        const items = Object.keys(this.props.details)
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
                    <i class="material-icons" style={styles.removeicon}>remove_circle_outline</i>
                    <img
                      style={styles.cover}
                      src={image}
                      alt="Product"
                    />
                    <span>{items}</span>
                </div> 
                
                
              </div>
              
            </Card>
          </div>
                
        );
    }
}

export default Cart;