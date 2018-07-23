import React from 'react';
import { getFunName } from '../helpers';
import TextField from '@material-ui/core/TextField';
import Navbar from './Navbar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = (event) => {
        event.preventDefault();
        const storeName = event.target.name.value
        //const storeName = this.myInput.value.value;
        this.props.history.push(`/store/${storeName}`)
    }

    render() {
        return (
            <React.Fragment>
                { /* Use React.Fragment instead of div to avoid unnecessary elements on DOM */}
                <Paper style={{ padding: '20px' }} elevation={1}>
                    <form className="store-selector" onSubmit={this.goToStore}>
                        <Typography variant="headline" gutterBottom>
                            Please Enter A Store
                        </Typography>

                        <TextField
                            id="name"
                            type="text"
                            //ref={this.myInput} 
                            placeholder="Store Name"
                            defaultValue={getFunName()}
                            required />
                        <Button size="small" variant="contained" color="primary" type="submit" style={{ margin: '15px' }}>
                            Visit Store
                        </Button>
                    </form>
                </Paper>
            </React.Fragment>
        );
    }
}

export default StorePicker;