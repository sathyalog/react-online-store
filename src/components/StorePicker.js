import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();
    
    goToStore = (event) => {
        event.preventDefault();
        console.log(this);
    }
    
    render() {
        return(
            <React.Fragment>
            { /* Use React.Fragment instead of div to avoid unnecessary elements on DOM */ }
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>
                        Please Enter A Store
                    </h2>
                    <input type="text"
                    ref={this.myInput} 
                    placeholder="Store Name" 
                    defaultValue={getFunName()} 
                    required/>
                    <button type="submit">Visit Store >> </button>
                </form>
            </React.Fragment>
        );
    }
}

export default StorePicker;