import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Add from './Add';
import Listposts  from './Listposts';
import PostView from './PostView';
import Messagesview from './Messagesview';
import Settingsview from './Settingsview';



class Main extends React.Component {
  render(){
    return(
      <div className="home_content">
      <Switch>
        <Route exact path = '/' component={Listposts} />
        <Route exact path = '/post/:id' component={PostView}/>
        <Route exact path = '/add' component={Add} />
        <Route exact path = '/messages' component={Messagesview} />
        <Route exact path = '/settings' component={Settingsview} />
      </Switch>
      </div>
    );
  }
}

export default Main;
