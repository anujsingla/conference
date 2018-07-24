import React from 'react';
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
import Greet from './Greet';
import {Route} from 'react-router-dom';
import Nav from './Nav';

class App extends React.Component {
  render() {
    return (
        <div>
            <Nav />
            <Route exact={true} path="/" component={Main}/>
            <Route path="/greet" component={Greet} />
        </div>
    );
  }
}

export default App;
