import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

//MATERIALUI
  //PROVIDER
    import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">


          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
