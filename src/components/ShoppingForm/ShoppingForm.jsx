import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ShoppingForm ({newItemName, setNewItemName, newQuantity, setNewQuantity, newUnit, setNewUnit, addItem}) {

    //Called when the Save button is pressed
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit');

        addItem();
        clearItemFields();
    }

    //Clear input fields of input form by resetting the item
    const clearItemFields = () => {
        console.log('in clearItemFields');

        setNewItemName('');
        setNewQuantity('');
        setNewUnit('');
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Add an Item</h2>
            </div>
            <label htmlFor="itemInput"> Item: </label>
            <input type="text" id="itemInput" value={newItemName} onChange={(evt) => setNewItemName(evt.target.value)}/>

            <label htmlFor="quantityInput"> Quantity: </label>
            <input type="text" id="quantityInput" value={newQuantity} onChange={(evt) => setNewQuantity(evt.target.value)}/>

            <label htmlFor="unitInput"> Unit: </label>
            <input type="text" id="unitInput" value={newUnit} onChange={(evt) => setNewUnit(evt.target.value)}/>

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