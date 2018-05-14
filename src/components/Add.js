import React,{Fragment} from 'react';
import './style/Add/add.css';
import {Link, Redirect} from 'react-router-dom';
import fire from '../config/config';

class Add extends React.Component {

  state = {
    title: '',
    content: '',
    redirect: false
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name] : e.target.value })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const {title,content} = this.state;
    if(title && content){
      this.setState({redirect : true})
      const itemsdb = fire.database().ref('posts');
      const item = {
        title,
        content
      }
      itemsdb.push(item);
      this.setState({title: '', content: ''})
    }else {
      console.log("ERORRORORORO")
    }
  }

  render(){
    return(
      <Fragment>
      <div className="home_btn_home">
          <Link  className="btn__" to="/">HOME</Link>
      </div>
      <div className="home_add">
        <form onSubmit={this.handleOnSubmit}>
          <input className="title" type='text' placeholder="Title..."
            name = 'title'
            value={this.state.title}
            onChange={this.handleOnChange}
          />
          <textarea className="content"
            placeholder='Content'
            name = 'content'
            value={this.state.content}
            onChange={this.handleOnChange}
            >
            </textarea>
          <div className="btn_submit">
            <input className="btn_submit_" type='submit' value="Send" />
          </div>
           {this.state.redirect && <Redirect to="/" />}
        </form>
      </div>
      </Fragment>
    );
  }
}

export default Add;
