import React from 'react';
import AddItem from './AddItem';
class Inventory extends React.Component {
    render() { 
        return (
            <div className="inventory">
                <AddItem addItem = {this.props.addItem}></AddItem> 
            </div>
        );
    }
}
 
export default Inventory;