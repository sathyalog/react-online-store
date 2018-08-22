import React from 'react';
import AddItem from './AddItem';
import Paper from '@material-ui/core/Paper';
import EditItem from './EditItem';

class Inventory extends React.Component {
    render() { 
        return (
            <div className="inventory">
            { this.props.location && this.props.location.pathname == this.props.match.url ? <React.Fragment><Paper style={{ padding: '20px' }} elevation={1}>
                {/* { this.props.items.map(item => <EditItem/>) } */}
                <AddItem addItem = {this.props.addItem}></AddItem> 
            </Paper></React.Fragment> : 
            <React.Fragment><AddItem addItem = {this.props.addItem}></AddItem> 
            <button onClick={this.props.loadSampleItems}>
                Load Sample Items
             </button> </React.Fragment>
            }
            </div>
            
        );
    }
}
 
export default Inventory;