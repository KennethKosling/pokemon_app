const express = require('express')
const app = express()
const pokemons = require('./models/pokemon')


//MVC SETUP
//views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//OPENER
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to the pokemon app!</h1>`)
})

//INDEX
app.get('/pokemon', (req, res) => {
    res.render(`Index`, {pokemons})
})

//SHOW
app.get('/pokemon/:id', (req, res) => {
    res.send(req.params.id)
})

//PORT
app.listen(3000, () => {
    console.log('Wynncraft is Great');
})