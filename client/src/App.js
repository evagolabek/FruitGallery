import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import NavBar from './components/NavBar'
import FruitList from './components/FruitList'
import FruitDetails from './components/FruitDetails'
import AddFruitForm from './components/AddFruitForm'
import EditFruitForm from './components/EditFruitForm'


//MATERIALUI
  //PROVIDER
    import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <NavBar />
            <Route exact path="/fruits" component={FruitList} />
            <Route exact path="/fruits/:fruitId" component={FruitDetails} />
            <Route exact path="/addFruit" component={AddFruitForm} />
            <Route exact path="/editFruit/:fruitId" component={EditFruitForm} />

            <Route exact path="/" render= { () => <Redirect to="/fruits"/> } />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
