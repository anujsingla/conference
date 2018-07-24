import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
import Greet from './Greet';
import {Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import TodoApp from './TodoApp';

class App extends React.Component {
  render() {
    return (
        <div>
            <Nav />
            {/* it iterate in its children and render when first route match */}
            <Switch>
                {/* <Route exact={true} path="/" component={Login}/> */}
                <Route exact={true} path="/" component={Main}/>
                <Route path="/greet" component={Greet} />
                <Route path="/todo" component={TodoApp} />
            </Switch>
        </div>
    );
  }
}

export default App;
