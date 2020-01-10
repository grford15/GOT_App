import React from 'react';
import Axios from 'axios';

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    Axios(
      'https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50',
    )
      .then(result => this.setState({ characters: result.data }))
      .catch(error => error);
  }

  render() {
    const characters = this.state.characters;

    return (
      <div>
        <h1>Characters Page</h1>

        {characters &&
          characters.map(item => (
            <div>
              <h4>{item.aliases[0]}</h4>
            </div>
          ))}
      </div>
    );
  }
}

export default Characters;
