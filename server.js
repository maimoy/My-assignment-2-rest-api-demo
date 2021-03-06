const express = require('express');
const logger = require('morgan');
const errorHandler = require('errorHandler');
const bodyParsser = require('body-parser');


let store = {};
store.accounts = [];


let app = express();
app.use(bodyParsser.json());
app.use(logger('dev'));
app.use(errorHandler());


app.get('/accounts', (req, res) => {
    res.status(200).send(store.accounts);
});

app.post('/accounts', (req, res) => {
    let newAccount = req.body;
    let id = store.accounts.length;
    store.accounts.push(newAccount);
    res.status(201).send({ id: id });
});

app.put('/accounts/:id', (req, res) => {
    store.accounts[req.accounts.id] = req.body;
    res.status(200).send(store.accounts[req.params.id]);
});

app.delete('/accounts/:id', (req, res) => {
    store.accounts.splice(req.params.id, 1);
    res.status(204).send();
});

app.listen(3000);
