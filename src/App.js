import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/homepage";
import Rooms from "./components/rooms";
import Details from "./components/details";
import Dashboard from "./components/dashboard";
import ClassicFormPage from "./components/intro";
import AdminLogin from "./components/adminLogin";
import Contact from './components/contact';
import Map from './components/map';
import About from './components/about';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={ClassicFormPage} />
          <Route exact={true} path="/home" component={Home} />
          <Route exact={true} path="/rooms" component={Rooms} />
          <Route exact={true} path="/contact" component={Contact} />
          <Route exact={true} path="/about" component={About} />
          <Route exact={true} path="/map" component={Map} />
          <Route exact={true} path="/details/:id" component={Details} />
          <Route exact={true} path="/dashboard" component={Dashboard} />
          <Route exact={true} path="/admin" component={AdminLogin} />
        </div>
      </Router>
    );
  }
}

export default App;
