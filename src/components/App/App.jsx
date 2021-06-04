import React from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import ShoppingForm from '../ShoppingForm/ShoppingForm';
import ShoppingList from '../ShoppingList/ShoppingList';

function App() {

    //Dillon's work area
    //This function is called by the ShoppingForm when the submit (Save) button is pressed
    const addItem = (newItem) => {
        console.log('newItem: ', newItem);

        //POST data here
        axios.post( '/list', newItem )
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





    return (
        <div className="App">
            <Header />
            <main>


                <section>Dillons AREA</section>
            <ShoppingForm addItem={addItem}/>

                <p>Under Construction...</p>

                <section>Ians AREA</section>

                <ShoppingList />
                <section>Bens AREA</section>

                
            </main>
        </div>
    );
}

export default App;
