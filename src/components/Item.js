import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {formatPrice} from '../helpers';
import Icon from '@material-ui/core/Icon';

class Item extends React.Component {
    render() {
        const { image, name, desc, price, status } = this.props.details;
        const isAvailable = status === 'available';
        return(
            <div>
                <Card style={{maxWidth: 345, margin:'15px'}}>
                    <CardMedia style={{height: 0,paddingTop: '56.25%'}}
                    image={image}
                    title={name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                    {name}
                    </Typography>
                    <Typography component="p">
                    {desc}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary" 
                    disabled={!isAvailable} 
                    style={{fontWeight:'800'}}
                    onClick={ () => this.props.addToOrder(this.props.index)}
                    >
                        {isAvailable ? "Add To Cart" : "Sold Out!"}
                    </Button>
                    <Typography style={{fontSize:'15px',fontWeight:'500', marginLeft:'170px', color:'black'}}>
                    {formatPrice(price)}
                    </Typography>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Item;