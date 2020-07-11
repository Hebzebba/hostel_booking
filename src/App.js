import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/homepage";
import Rooms from "./components/rooms";
import Details from "./components/details";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/rooms" component={Rooms} />
          <Route exact={true} path="/details/:id" component={Details} />
        </div>
      </Router>
    );
  }
}

export default App;
