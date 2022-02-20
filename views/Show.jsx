const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000'
}



class Show extends React.Component {
    render(){
        const pokemon = this.props.pokemon;
        console.log(pokemon.indexOf('bulbasaur'))
        return(
            <div style={myStyle}>
                <h1>Gotta Catch 'Em All</h1>
                <h2>{pokemon[`/pokemon/:id`]}</h2>
                <img src={pokemon.img + '.jpg'}></img>
                <a href='/pokemon'>Back</a>
            </div>
        )
    }
}

module.exports = Show