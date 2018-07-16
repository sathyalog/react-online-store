import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Item extends React.Component {
    render() {
        return(
            <div>
                <Card style={{maxWidth: 345, margin:'15px'}}>
                    <CardMedia style={{height: 0,paddingTop: '56.25%'}}
                    image={this.props.details.image}
                    title={this.props.details.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                    {this.props.details.name}
                    </Typography>
                    <Typography component="p">
                    {this.props.details.desc}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary">
                        Add to Cart
                    </Button>
                    <Button size="small" color="primary">
                        Add to Favorite
                    </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Item;