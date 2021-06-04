import axios from "axios"




function ShoppingList({shoppingList, getShoppingList}) {

    console.log(shoppingList);

    const handleReset = () => {
        console.log('Reset button clicked')
        //Remove purchase status from all items
        axios.put( '/list', { purchased: false } )
        .then( response => {
            console.log('all items reset!');
    
            getShoppingList();
        })
        .catch( err => {
            alert('Error while resetting items');
            console.log(err);
        })
    }
    
    const handleClear = () => {
        console.log('Clear button clicked')
        //Delete all items from DB DROP TABLE
        //let 
    }


    return (
        <>
            <h2>Shopping List</h2>
            <button onClick={() => { handleReset() }}>Reset</button>
            <button onClick={() => { handleClear() }}>Clear</button>
        </>
    )
};

export default ShoppingList;