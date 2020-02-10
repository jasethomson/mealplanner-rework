import React from 'react';
import AppContext from './context';

export default class Footer extends React.Component{


  render(){
    return(
      <footer>
        <h4>
          This website was developed by Jase Thomson, check me out on:
        </h4>
        <ul>
          <li>
            <a href="https://github.com/jasethomson" target="_blank">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jase-thomson/" target="_blank">
              <i className="fab fa-github-square fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="https://jasethomson.com/" target="_blank">
              <i className="fas fa-briefcase fa-2x"></i>
            </a>
          </li>
        </ul>
      </footer>
    )
  }
}
