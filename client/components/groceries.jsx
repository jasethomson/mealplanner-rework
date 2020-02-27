import React from 'react';
import AppContext from './context';

export default class Groceries extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      todo: null
    }
  }


  render(){
    return(
      <div>Groceries incoming</div>
    );
  }
}
