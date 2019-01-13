import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import ExampleComponent from './components/ExampleComponent'
import Greeting from './components/Greeting'

export default class App extends Component {
  state = {
    peopleInSpace: []
  }

  render() {
    return (
      <div>
        <Greeting />
        <ExampleComponent />
        {this.state.peopleInSpace.map(p => {
          return <li key={p.name}>{p.name}</li>
        })}
        <Button />
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(r => r.json())
      .then(d => {
        this.setState(() => {
          return {
            peopleInSpace: d.people
          }
        })
      })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
