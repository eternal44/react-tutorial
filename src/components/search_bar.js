// extracts the 'Component' property from react
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    // 'super' calls parent methods
    super(props);

    this.state = { term: '' }
  }

  render() {
    // 'onChange' is an event listener for any changes
    return (
      <div>
        <input 
          value={ this.state.term }
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
