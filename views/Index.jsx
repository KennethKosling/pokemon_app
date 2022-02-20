const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000'
}

class Index extends React.Component{
    render(){
        const pokemon = this.props.pokemon
        return(
            <div style={myStyle}>
                <h1>See All The Pokemon!</h1>
                <ul>
                {
                    pokemon.map((pokemon, i) => {
                        return(
                            <li key={i}><a href={`/pokemon/${i}`}>{pokemon.name}</a></li>
                        )
                    })
                }
                </ul>
                <nav>
                    <a href='/fruits/new'>Go to the New Page</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index