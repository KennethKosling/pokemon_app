const express = require('express')
const app = express()
const pokemon = require('./models/pokemon')


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
    res.render(`Index`, {pokemon})
})

//PORT
app.listen(3000, () => {
    console.log('Wynncraft is Great');
})