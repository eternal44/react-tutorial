// extracts the 'Component' property from react
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    // 'onChange' is an event listener for any changes
    return <input onChange={event => console.log(event.target.value)} />;
  }
}

export default SearchBar;
