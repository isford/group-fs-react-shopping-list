
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import ShoppingForm from '../ShoppingForm/ShoppingForm';
import ShoppingList from '../ShoppingList/ShoppingList';
import ShoppingItems from '../ShoppingItems/ShoppingItems'

function App() {
    

    
    //Dillon's work area
    //This function is called by the ShoppingForm when the submit (Save) button is pressed
    const addItem = () => {
        console.log('newItem: ', { name: newItemName, quantity: newQuantity, unit: newUnit });

        //POST data here
        axios.post( '/list', { name: newItemName, quantity: newQuantity, unit: newUnit, purchase: false })
        .then( response => {

            //refresh item list? = talk to Ian and Ben what this is officially called
            // getItems();
        })
        .catch( err => {
            alert('Error adding item!');
            console.log( err );
        })
    }


    //Ian's work area



    
    //Ben's work area
    let [shoppingList, setShoppingList] = useState([]);
    let [newItemName, setNewItemName] = useState('');
    let [newQuantity, setNewQuantity] = useState('');
    let [newUnit, setNewUnit] = useState('');
    
    //On load, get shopping list
    useEffect(() => {
        getShoppingList()
    }, [])
    
    //GET 
    const getShoppingList = () => {
        axios.get('/list')
        .then(response => {
            setShoppingList(response.data)
            console.log('GET RESPONSE>DATA', response.data)
        })
        .catch(err => {
            console.log('Error in get', err)
        })
    }
    
    
    return (
        <div className="App">
            <Header />
            <main>


                <section>Dillons AREA</section>
            <ShoppingForm 
               newItemName={newItemName}
               setNewItemName={setNewItemName}
               newQuantity={newQuantity}
               setNewQuantity={setNewQuantity}
               newUnit={newUnit}
               setNewUnit={setNewUnit} 
               addItem={addItem}
                />

                <p>Under Construction...</p>

                <section>Ians AREA</section>

                <ShoppingList />
                <section>Bens AREA</section>
                <ShoppingItems shoppingList={shoppingList} />

                
            </main>
        </div>
    );
}

export default App;
