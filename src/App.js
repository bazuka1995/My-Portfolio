import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Home from "./containers/Home/Home";
import Layout from "./components/Layout/Layout";
import "./App.css";
import Travel from './containers/Travel/Travel';
import Astro from './containers/Astro/Astro';

class App extends Component {
  render() {
    let routes = (
      <switch>
        <Route path="/" component={Home} />
        <Route path="/Portfolio/Astro" component={Astro} />
        <Route path="/Portfolio/Travel" component={Travel} />
        <Redirect to="/" />
      </switch>
    );

    return (
      <div className="App">
        <Layout>
          <Switch>{routes}</Switch>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
