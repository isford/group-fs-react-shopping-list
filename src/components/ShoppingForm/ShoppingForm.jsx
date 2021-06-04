import React, { useState } from 'react';

function ShoppingForm () {

    const [item, setItem] = useState({ name: '', quantity: '', unit: '', purchased: ''});

    //Called when the Save button is pressed
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit', item);
        // ? This might change based on what the function is called in Ian's part
        // addItem(item);
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

export default ShoppingForm;