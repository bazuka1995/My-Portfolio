import React, { Component } from "react";
import classes from "./Toolbar.module.css";
import Burger from "../Burger/Burger";
import NavLinks from '../NavLinks/NavLinks';

class toolbar extends Component {
  state = {
      nav: false
  };

  burgerToggle = () => {
      this.setState(prevState => {
          return { nav: !prevState.nav }
      })
  }

  render() {
    return (
      <header className={classes.Toolbar}>
        <Burger toggle={this.burgerToggle} nav={this.state.nav}/>
        <NavLinks toggle={this.burgerToggle} nav={this.state.nav} />
      </header>
    );
  }
}

export default toolbar;
