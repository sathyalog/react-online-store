import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddItem extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    createItem = (event) => {
        event.preventDefault();
        const Item = {
            //name: this.nameRef.value.value, /*react ref process*/
            name: event.target.name.value,
            //price: parseFloat(this.priceRef.value.value),
            price: parseFloat(event.target.price.value),
            status: this.statusRef.value.value,
            desc: event.target.desc.value,
            image: event.target.image.value
        }
        this.props.addItem(Item);
        //refresh the form
        event.currentTarget.reset();
    }
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createItem}>
                {/* <input name="name" type="text" ref={this.nameRef} placeholder="Name"/> */}
                <TextField name="name" id="name" label="Name" type="text" inputRef={node => this.nameRef} /> &nbsp;
                <TextField name="price" id="price" label="Price" type="text" inputRef={node => this.priceRef} />&nbsp;
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!!</option>
                    <option value="unavailable">Sold Out</option>
                </select><br />
                <TextField id="desc" label="Description" name="desc"
                    inputRef={node => this.descRef}
                    multiline
                    rows="2" /><br />
                <TextField id="image" label="Image" name="image" type="text" inputRef={node => this.imageRef} />
                <Button size="small" variant="contained" color="primary" type="submit" style={{ margin: '15px' }}>
                    Add Item
                </Button>
            </form>
        )
    }
};

export default AddItem;