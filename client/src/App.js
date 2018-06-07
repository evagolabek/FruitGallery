import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

// import NavBar from './components/NavBar'
import SimpleMenu from './components/SimpleMenu'


import FruitList from './components/FruitList'
import FruitDetails from './components/FruitDetails'
import AddFruitForm from './components/AddFruitForm'
import EditFruitForm from './components/EditFruitForm'

import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import AddRecipeForm from './components/AddRecipeForm'
import EditRecipeForm from './components/EditRecipeForm'



//MATERIALUI
  //PROVIDER
    import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <SimpleMenu />
            <Route exact path="/fruits" component={FruitList} />
            <Route exact path="/fruits/:fruitId" component={FruitDetails} />
            <Route exact path="/addFruit" component={AddFruitForm} />
            <Route exact path="/editFruit/:fruitId" component={EditFruitForm} />
            <Route exact path="/recipes" component={RecipeList} />
            <Route exact path="/recipes/:recipeId" component={RecipeDetails} />
            <Route exact path="/addRecipe" component={AddRecipeForm} />
            <Route exact path="/editRecipe/:recipeId" component={EditRecipeForm} />

            <Route exact path="/" render= { () => <Redirect to="/fruits"/> } />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
