import React from 'react';
import AppContext from './context';

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      search: ""
    }
  }

  handleSearch(event){
    // direct to results page with value to call api and produce results
  }

  handleChange(event){
    event.preventDefault();
    this.setState({ search: event.target.value });
  }

  render(){
    return (
      <div id="homePage">
        <form className="searchBarForm" onSubmit={this.handleSearch}>
          <input
            className="searchBar"
            type="search"
            value={this.state.search}
            placeholder="Search for your next recipe"
            onChange={this.handleChange}
          />
         <i className="fas fa-search fa-lg" onClick={search => this.handleSearch(search)}></i>
        </form>
      </div>
    )
  }
}
