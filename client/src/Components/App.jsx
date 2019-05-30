import React from 'react';
import classNames from 'classnames';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      pictures: [],
    }

    this.getItems = this.getItems.bind(this)
  }

  componentDidMount () {
    let id = 1
    this.getItems(id)
  }

  getItems(id) {
    axios
      .get(`/api/carousel/pics/${id}`)
      .then (({data}) => {
        this.setState ({
          pictures: data.pictures
        })
      })
      .then(response => {
      console.log (this.state)
      })
      .catch(error => console.log (`there was an error: ${error}`))
  }
  render () {
    return (
      <div>
        <h1>Hello from React</h1>
      </div>
    )
  }
}

export default App; 