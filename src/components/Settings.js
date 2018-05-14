import React from 'react';
import {Link} from 'react-router-dom';
import './style/settings/settings.css';


class Settings extends React.Component {
  render(){
    return(
      <div className="settings">
        <Link className="settings_btn" to = '/settings'> settings </Link>
      </div>
    );
  }
}

export default Settings;
