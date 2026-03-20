import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Login from "./login";
import Register from "./register";
import Profile from "./profile";
import Forgot from "./forgotPassword";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screen: 1,
      user: null,
    };
  }

  goToLogin = () => {
    this.setState({ screen: 2 });
  };

  goToRegister = () => {
    this.setState({ screen: 1 });
  };

  goToProfile = (user) => {
    this.setState({
      screen: 3,
      user: user,
    });
  };

  goToSetPassword = (user) => {
    this.setState({ screen: 4 });
  };
  render() {
    const { screen, user } = this.state;

    if (screen === 1) {
      return <Register goToLogin={this.goToLogin} />;
    }

    if (screen === 2) {
      return (
        <Login
          goToRegister={this.goToRegister}
          goToProfile={this.goToProfile}
          goToSetPassword={this.goToSetPassword}
        />
      );
    }

    if (screen === 3) {
      return <Profile user={user} goToLogin={this.goToLogin} />;
    }

    if (screen === 4) {
      return <Forgot goToLogin={this.goToLogin} />;
    }
  }
}
