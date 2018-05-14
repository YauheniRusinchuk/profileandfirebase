import React from 'react';
import {Link} from 'react-router-dom'


export default ({logout}) => {
  return(
    <div className="home_bnt_logout">
      <Link to='/add' className="add_btn btn_">ADD</Link>
      <button className="btn_" onClick={logout}>LOG OUT</button>
    </div>
  );
}
