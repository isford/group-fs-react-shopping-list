const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// GET Request to the Database
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "list" ORDER BY "id";`;
    pool.query(queryText).then(result => {
    // sends back the result in an object
    res.send(result.rows);
    console.log(result.rows);
    }).catch(error => {
        console.log('error getting tasks from DB', error);
        res.sendStatus(500);
    });
});


//POST Request
router.post('/', (req, res) => {
    const item = req.body;
    const sqlText = `INSERT INTO list ("name", "quantity", "unit")
                    VALUES ($1, $2, $3);`;

    pool.query(sqlText, [item.name, item.quantity, item.unit])
        .then((result) =>{
            console.log('Added item to the DB', item);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error in POST ROUTER ${sqlText}`, error);
            res.sendStatus(500);
        })
})

//PUT Request
router.put('/', (req, res) => {
    //let itemId = req.params.id;
    //console.log('itemId in router', itemId);

    //let purchasedItem = req.body.purchased
    //console.log(req.body);
    //console.log(purchasedItem);

    let queryString = `UPDATE "list" SET "purchased" = FALSE`;

    pool.query(queryString)
        .then(response => {
            console.log(response.rowCount);
            res.sendStatus(202);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
})

module.exports = router;