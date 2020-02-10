import React from 'react';
import AppContext from './context';
import Nav from './nav';
import Footer from './footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      placeHolder: false
    }
  }

  render(){
    const contextValue = {
      placeHolder: this.state.placeHolder
    };
    return(
      <div>
        <Nav/>
        {/* <AppContext.Provider value={contextValue}>
          <Router>
            <Route exact path="/" component={Home}/>
          </Router>
        </AppContext.Provider> */}
        <Footer />
      </div>
    )
  }
}
