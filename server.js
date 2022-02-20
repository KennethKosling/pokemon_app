require('dotenv').config()
const express = require('express')
const Pokemon = require('./models/pokemon')
const mongoose = require('mongoose')
const app = express()


//MVC SETUP
//views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//models
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use((req, res, next) => {
    console.log(req.body)
    next()
})

//OPENER
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to the pokemon app!</h1>`)
})

//INDEX
app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (err, foundPokemon) => {
        if(err) {
            res.status(400).send(err)
        } else {
            res.render('Index', {
                pokemon: foundPokemon
            })
        }
    })
});

//NEW
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

//DELETE


//UPDATE


//CREATE
app.post('/pokemon', (req, res) => {
    Pokemon.create(req.body, (err, createdPokemon) => {
        if(err) {
            res.status(403).send(err)
        } else {
            res.redirect('/pokemon')
        }
    })
});

//SHOW
app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        if(err) {
            res.status(400).send(err)
        } else {
            res.render('Show', {
                pokemon: foundPokemon
            })
        }
    })
});
//show page for part 1 doesn't throw any errors but also does not display an image or name

//PORT
app.listen(3000, () => {
    console.log('Wynncraft is Great');
})