// create your App component here
import React from "react";


class App extends React.Component {
    state = {
        people: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then( ({apiData}) => this.setState({
            data: apiData
        }))
    }

    render() {
        return (
            <div>
                {this.state.people.map((person, id) => <h1 key={id}>{person.name}</h1>)}
            </div>
        )
    }
}

export default App