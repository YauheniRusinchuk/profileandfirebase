import React from 'react';
import './style/post/post.css';
import {Link} from 'react-router-dom';


export default ({id,title,content}) => {
  return(
    <div className='post'>
      <div className='post_profile_info'>
        <div className='post_profile_avatar'>
          <img src="https://media.licdn.com/dms/image/C4D03AQEyCsRF6jYgEA/profile-displayphoto-shrink_200_200/0?e=1531353600&v=beta&t=32FhfQzwfarNU4ajJVhFCElcRZleZPh0p1GJeSO-rF8" alt="profile" />
        </div>
        <span> Yauheni Rusinchuk </span>
      </div>
      <div className='post_content_'>
        <div className="post_title">
          <Link className="post_title__" to={`/post/${id}`}>{title}</Link>
        </div>
        <div className="post_content__">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
