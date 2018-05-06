import React, { PureComponent } from "react";
import AppBar from 'material-ui/AppBar'




class NavBar extends PureComponent {

  render() {
    return (
      <AppBar
        title={<span style={{cursor: 'pointer'}}>Fruit Gallery</span>}
      />
    );
  }
}


export default (NavBar)
