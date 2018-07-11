import React from 'react';

class AddItem extends React.Component{
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    createItem = (event) => {
        event.preventDefault();
        const Item = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            desc: this.descRef.value.value,
            image: this.imageRef.value.value
        }
        this.props.addItem(Item);
        //refresh the form
        event.currentTarget.reset();
    }
    render() {
        return(
            <form className="fish-edit" onSubmit={this.createItem}>
                <input name="name" type="text" ref={this.nameRef} placeholder="Name"/>
                <input name="price" type="text" ref={this.priceRef} placeholder="Price"/>
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!!</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <textarea name="desc" placeholder="Description" ref={this.descRef}></textarea>
                <input name="image" type="text" placeholder="image" ref={this.imageRef}/>
                <button type="submit">+ Add Item</button>
            </form>
        )
    }
};

export default AddItem;