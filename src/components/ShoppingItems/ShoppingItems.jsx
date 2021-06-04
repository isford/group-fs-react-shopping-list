//import ShoppingList from "../ShoppingList/ShoppingList";
import "./ShoppingItems.css"

function ShoppingItems ({shoppingList}) {


    return (

        <>
            {shoppingList.map(item => (
                <p key={item.id} className="food"> {item.name}, {item.quantity}, {item.unit}</p>
            ))}
        <p></p>
        </>
    )
}

export default ShoppingItems;