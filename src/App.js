import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Characters from './components/characters';
import Books from './components/books';
import Houses from './components/houses';
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
        <Router>
          <nav>
            <div>
              <Link to="characters">Characters</Link>
            </div>
            <div>
              <Link to="houses">Houses</Link>
            </div>
            <div>
              <Link to="books">Books</Link>
            </div>
          </nav>
          <header className="App-header">
            <h1>Winter is Coming ...</h1>
          </header>
          <div>
            <Switch>
              <Route exact path="/characters">
                <Characters />
              </Route>
              <Route path="/houses">
                <Houses />
              </Route>
              <Route path="/books">
                <Books />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
