import React from 'react';
import Axios from 'axios';

class Books extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    Axios(
      'https://www.anapioficeandfire.com/api/books?page=1&pageSize=50',
    )
      .then(result => this.setState({ books: result.data }))
      .catch(error => error);
  }

  render() {
    const books = this.state.books;
    return (
      <div>
        <h1>Books Page</h1>
        {books &&
          books.map(item => (
            <div>
              <h4>{item.name}</h4>
            </div>
          ))}
      </div>
    );
  }
}

export default Books;
