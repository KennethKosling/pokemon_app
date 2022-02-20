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
                    pokemon.map((pocketmon) => {
                        return(                            
                            
                            <li key={pocketmon._id}><a href={`/pokemon/${pocketmon._id}`}>{pocketmon.name.charAt(0).toUpperCase() + pocketmon.name.slice(1)}</a></li>
                        )
                    })
                }
                </ul>
                <nav>
                    <a href='/pokemon/new'>Go to the New Page</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index