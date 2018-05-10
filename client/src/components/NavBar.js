import React, { PureComponent } from "react";
import {withRouter} from "react-router-dom";
import AppBar from 'material-ui/AppBar';




class NavBar extends PureComponent {

  render() {
    return (
      <AppBar
        title={<span style={{cursor: 'pointer'}}>Fruit Gallery</span>}
        onClick={() => this.props.history.push(`/fruits`)}
      />
    );
  }
}


export default withRouter(NavBar)
