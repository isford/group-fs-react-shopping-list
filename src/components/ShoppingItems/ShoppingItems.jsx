//import ShoppingList from "../ShoppingList/ShoppingList";

function ShoppingItems ({shoppingList}) {


    return (

        <>
            <p>Test</p>
    
            {shoppingList.map(item => (
                <p key = {item.id}> {item.name}, {item.quantity}, {item.unit}</p>
            ))}
        <p></p>
        </>
    )
}

export default ShoppingItems;