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
      <div className='search-bar'>
        <input 
          value={ this.state.term }
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
