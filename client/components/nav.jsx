import React from 'react';
import AppContext from './context';

export default class Nav extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      temp: false
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
      </nav>
    )
  }
}
