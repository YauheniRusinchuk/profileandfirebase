import React from 'react';
import fire from '../config/config';
import './style/home/home.css';
import Profile from './Profile';
import Btn from './Btn';
import Main from './Main';

class Home extends React.Component {

  logout = () => {
    fire.auth().signOut();
  }
  
  render(){
    return(
      <div className='home_container'>
          <Profile />
          <Main />
          <Btn  logout={this.logout} />
      </div>
    );
  }
}


export default Home;
