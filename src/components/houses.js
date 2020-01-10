import React from 'react';
import Axios from 'axios';

class Houses extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: [],
    };
  }

  componentDidMount() {
    Axios(
      'https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50',
    ).then(result => this.setState({ houses: result.data }));
  }

  render() {
    const houses = this.state.houses;
    return (
      <div>
        <h1>Houses Page</h1>
        {houses &&
          houses.map(item => (
            <div>
              <h4>{item.name}</h4>
              <h6>{item.words}</h6>
            </div>
          ))}
      </div>
    );
  }
}

export default Houses;
