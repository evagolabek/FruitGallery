import React, { PureComponent } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { logout } from "../actions/users";



class NavBar extends PureComponent {

  render() {
    return (
      <nav>
        <div class="nav-wrapper red">
          <a href="./" class="brand-logo"><i class="material-icons"></i>Home</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down"></ul>
        </div>
      </nav>
    );
  }
}


const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser
	}
}
export default connect(mapStateToProps)(NavBar);
