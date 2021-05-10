import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import Home from "./containers/Home/Home";
import Layout from "./components/Layout/Layout";
import "./App.css";
import Travel from "./containers/Travel/Travel";
import Astro from "./containers/Astro/Astro";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <switch>
            <Route path="/Portfolio/Astro" component={Astro} />
            <Route path="/Portfolio/Travel" component={Travel} />
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </switch>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
