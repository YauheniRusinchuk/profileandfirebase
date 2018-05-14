import React from 'react';
import Messages from './Messages';
import Settings from './Settings';



export default () => {
  return(
      <div className='home_wrapper'>
    <div className="home_avatar">
      <img src="https://media.licdn.com/dms/image/C4D03AQEyCsRF6jYgEA/profile-displayphoto-shrink_200_200/0?e=1531353600&v=beta&t=32FhfQzwfarNU4ajJVhFCElcRZleZPh0p1GJeSO-rF8" alt = 'Avatar' />
      <div className="home_info">
        <p> Yauheni Rusinchuk </p>
        <div className="home_profile_description">
          <p> I am a developer
              Java Python and JavaScript(ReactJS)
          </p>
        </div>
      </div>
      <Messages />
      <Settings />
    </div>
    </div>

  );
}
