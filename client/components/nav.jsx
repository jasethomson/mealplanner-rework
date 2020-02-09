import React from 'react';
import AppContext from './context';

export default class Nav extends React.Component{
  constructor(props){
    super(props);
    this.openNav = this.openNav.bind(this);


    this.state = {
      showNav: false
    }
  }

  openNav(){
    this.state.showNav ? this.setState({showNav: false}) : this.setState({showNav: true});
  }

  menuOption(){
    if (this.state.showNav) {
      return(
        <div id="sliderMenu">
          <ul>
            <li>
              <a className="active" href="/">Home</a>
            </li>
            <li>
              <a href="/recipes">Recipes</a>
            </li>
            <li>
              <a href="/calendar">Calendar</a>
            </li>
            <li>
              <a href="/groceries">Groceries</a>
            </li>
          </ul>
        </div>
      );
    }
  }

  render(){
    return (
        <nav id="nav" >
          <div id="logo">
            <a href="/">
              <img src="./assets/mpLogo.png" alt=""/>
            </a>
          </div>
          <ul id="navMenu">
            <li>
              <a className="active" href="/">Home</a>
            </li>
            <li>
              <a href="/recipes">Recipes</a>
            </li>
            <li>
              <a href="/calendar">Calendar</a>
            </li>
            <li>
              <a href="/groceries">Groceries</a>
            </li>
          </ul>
          <div id="navHamburger">
            <i onClick={this.openNav} className="fas fa-bars fa-2x"></i>
          </div>
          {this.menuOption()}
        </nav>
    )
  }
}
