import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ShoppingForm ({ addItem }) {

    const [item, setItem] = useState({ name: '', quantity: '', unit: '', purchased: ''});

    //Called when the Save button is pressed
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit', item);
        // ? This might change based on what the function is called in Ian's part
        addItem(item);
        clearItemFields();
    }

    //Clear input fields of input form by resetting the item
    const clearItemFields = () => {
        console.log('in clearItemFields');

        setItem({ name: '', quantity: '', unit: '', purchased: ''});
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="itemInput"> Item: </label>
            <input type="text" id="itemInput"/>

            <label htmlFor="quantityInput"> Quantity: </label>
            <input type="text" id="quantityInput"/>

            <label htmlFor="unitInput"> Unit: </label>
            <input type="text" id="unitInput"/>

            <input type="submit" value="Save"/>

        </form>
        </>
    )
}

// PropTypes is an optional library that helps developers.
// This will tell the parent component what functions it must implement to 
// use this component. And it throws an error that is easy to find for a developer if they forget it.
ShoppingForm.propTypes = {
    addItem: PropTypes.func.isRequired,
};

export default ShoppingForm;