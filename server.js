const express = require('express')
const app = express()
const pokemon = require('./models/pokemon')

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to the pokemon app!</h1>`)
})

app.get('/pokemon', (req, res) => {
    res.send(pokemon)
})


app.listen(3000, () => {
    console.log('Wynncraft is Great');
})