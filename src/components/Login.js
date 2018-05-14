import React from 'react';
import './style/login/login.css';
import fire from '../config/config';

class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {this.setState({[e.target.name]: e.target.value})}

  login = (e) => {
      e.preventDefault();
      const {email,password} = this.state;
      fire.auth().signInWithEmailAndPassword(email,password)
          .then(() => {this.setState({email: '', password: ''})})
          .catch((err) => {console.log(err.message)})
  }

  signin = (e) => {
    e.preventDefault();
    const {email,password} = this.state;
    fire.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{this.setState({email:'',password:''})})
        .catch((err)=>{console.log(err.message)})
  }


  render(){
    return(
      <div className="login_container">
        <div className="login_wrapper">
          <div className="login_form_title">
            <span> Welcom to this site </span>
          </div>
          <div className="login_form">
            <form>
              <span>EMAIL</span>
              <input className='input_' type='email' placeholder='Email...'
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <span>PASSWORD</span>
              <input className='input_' type='password' placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </form>
            <div className="login_form_btn">
              <button onClick={this.login} className='login_btn'>LOG IN</button>
              <button onClick={this.signin} className='login_btn'>SIGN IN</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
