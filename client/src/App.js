import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import FruitList from './components/FruitList'

//MATERIALUI
  //PROVIDER
    import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
          <Route exact path="/fruits" component={FruitList} />


          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
