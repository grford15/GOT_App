import React from 'react';
import axios from 'axios';
import './App.css';

const BASE_URL = 'https://www.anapioficeandfire.com/api/characters';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      houses: [],
      books: [],
    };

    this.fetchApiData = this.fetchApiData.bind(this);
  }

  fetchApiData() {
    axios(`${BASE_URL}`)
      .then(result => this.setState({ characters: result.data }))
      .catch(error => error);
  }

  componentDidMount() {
    this.fetchApiData();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Winter is Coming ...</h1>
        </header>
      </div>
    );
  }
}

export default App;
