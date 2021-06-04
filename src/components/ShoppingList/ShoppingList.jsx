function handleReset(){
    console.log('Reset button clicked')
    //Remove purchase status from all items
}

function handleClear(){
    console.log('Clear button clicked')
    //Delete all items from DB DROP TABLE
    //let 
}


function ShoppingList() {
    return (
        <>
            <h2>Shopping List</h2>
            <button onClick={() => { handleReset() }}>Reset</button>
            <button onClick={() => { handleClear() }}>Clear</button>
        </>
    )
};

export default ShoppingList;