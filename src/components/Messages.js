import React from 'react';
import './style/messages/messages.css';
import {Link} from 'react-router-dom';

class Messages extends React.Component {
  render(){
    return(
      <div className='main_messages'>
        <Link className="main_messages_btn" to='/messages'> Messages </Link>
      </div>
    );
  }
}

export default Messages;
