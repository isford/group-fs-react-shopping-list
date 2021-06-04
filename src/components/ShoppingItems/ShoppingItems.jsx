//import ShoppingList from "../ShoppingList/ShoppingList";
import "./ShoppingItems.css";
import axios from 'axios';

function handlePurchased( item ){
    console.log('Purchase button clicked');
    
    axios.put(`/list/${item}`, {purchased: true} )
    .then( response => {
            console.log('Purchased now true');
    
            getShoppingList();
        })
        .catch( err => {
            alert('Error while resetting items');
            console.log(err);
        });
    }

function handleDelete ( item ){
    console.log('Delete button is clicked')

    axios.delete(`/list/${item}`)
    .then(response => {
        console.log('deleted')
        getShoppingList();
    })
    .catch(error => {
        alert('Error while deleting items')
        console.log(error);
    })
}

function ShoppingItems ({shoppingList}) {


    return (
      <>
        {shoppingList.map((item) => (
          <p key={item.id} className="food">
            {item.name}, {item.quantity} {item.unit}
            <button onClick = {handlePurchased(item.id)}>Purchased!</button>
            <button onClick = {handleDelete(item.id)}>Delete It</button>
          </p>
        ))}
      </>
    );
}

export default ShoppingItems;