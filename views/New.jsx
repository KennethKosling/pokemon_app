const React = require('react');

class New extends React.Component {
    render(){
        return(
        <div>
            <h1>Hi, This is the New Page</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/pokemon" method="POST">
                Name: <input name="name" type="text" /><br/>
                Image: <input name="image" type="text" /><br/>
                <input type="submit" value="Add A Pokemon" />
            </form>
            <nav>
                <a href='/pokemon'>Back to the Index</a>
            </nav>
        </div>
        
        )
    }
}

module.exports = New;