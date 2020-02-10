import React from 'react';
import AppContext from './context';

export default class Footer extends React.Component{


  render(){
    return(
      <footer>
        <h3>
          This website was developed by Jase Thomson, check me out on:
        </h3>
        <ul>
          <li>
            <a href="">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fab fa-github-square fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fas fa-briefcase fa-2x"></i>
            </a>
          </li>
        </ul>
      </footer>
    )
  }
}
