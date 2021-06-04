import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import ShoppingForm from '../ShoppingForm/ShoppingForm';
import ShoppingList from '../ShoppingList/ShoppingList';
import ShoppingItems from '../ShoppingItems/ShoppingItems'

function App() {
    

    
    //Dillon's work area



    //Ian's work area



    
    //Ben's work area
    let [shoppingList, setShoppingList] = useState([]);
    let [newItem, setNewItem] = useState('');
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
    

    //POST
    const addItem = () => {
        axios.post('/list', {name: newItem, quantity: newQuantity, unit: newUnit})
        .then(response => {
            setNewItem('');
            setNewQuantity('');
            setNewUnit('');
        }).catch(err => {
            console.log('Error in post', err)
        })
    }
    
    return (
        <div className="App">
            <Header />
            <main>


                <section>Dillons AREA</section>
            <ShoppingForm />

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
