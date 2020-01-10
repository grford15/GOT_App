import React from 'react';
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

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <div className="nav-link">
              <Link to="characters">Characters</Link>
            </div>
            <div className="nav-link">
              <Link to="houses">Houses</Link>
            </div>
            <div className="nav-link">
              <Link to="books">Books</Link>
            </div>
          </nav>
          <header className="App-header">
            <h1>Winter is Coming ...</h1>
          </header>
          <div className="main-component">
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
