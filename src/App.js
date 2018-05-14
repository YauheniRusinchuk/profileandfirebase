import React, { Component } from 'react';
import './App.css';
import fire from './config/config';
import Login from './components/Login';
import Home from './components/home';


class App extends Component {

  state = {
    user: {}
  }

  componentDidMount() {
      this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged((user)=>{
      if(user) {
        this.setState({user})
      }else {
        this.setState({user: null})
      }
    })
  }

  render() {
    return (
      <div>
          {this.state.user ? <Home /> : <Login />}
      </div>
    );
  }
}

export default App;
