import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import ShoppingForm from '../ShoppingForm/ShoppingForm';
import ShoppingList from '../ShoppingList/ShoppingList';

function App() {
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

                
            </main>
        </div>
    );
}

export default App;
