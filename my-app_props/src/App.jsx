import React from 'react';
import './App.css';
import Greet from './Greet';

class App extends React.Component {
  render() {
    return (
    <div>
      <Greet name='react' value={7} />
      <p>hello</p>
    </div>
    );
  }
}

export default App;
