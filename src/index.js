import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDytR0Dz4b-fX6MsfHIpC_v7PQeqaJh2m0';

// Create a new component.  This component should produce some html
const App = () => {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
