import React from 'react';
import AppContext from './context';

export default class Recipes extends React.Component{

  render(){

    return(
      <div id="recipes">
        <div id="recipeContainer">
          <div className="recipe">Favorites</div>
          <div className="recipe">Breakfast</div>
          <div className="recipe">Lunch</div>
          <div className="recipe">Dinner</div>
          <div className="recipe">Vegetarian</div>
        </div>
        <div id="fileBox">Recipes</div>
      </div>

    )
  }
}
