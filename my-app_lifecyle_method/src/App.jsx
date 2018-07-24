import React from 'react';
import './App.css';
import Greet from './Greet';

class App extends React.Component {
  render() {
    return (
    <div>
      <Greet name='react' />
    </div>
    );
  }
}

export default App;
