import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from "./Nav"
import Home from './Home';
import Battle from './Battle';
import Switch from 'react-router';

import Popular from "./Popular"

class App extends React.Component {
  render() {
    return (

      <Router>
        <div className="container">

          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/popular" component={Popular} />
            <Route render={function () {
              return <p>Not Found Homes</p>
            }} />
          </Switch>

        </div>
      </Router>
      
    )
  }
}

export default App;