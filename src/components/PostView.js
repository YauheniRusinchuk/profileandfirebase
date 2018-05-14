import React from 'react';
import './style/postview/postview.css';
import fire from '../config/config';
import {Link} from 'react-router-dom';


class PostView extends React.Component {

  state = {
    post: []
  }

  componentWillMount() {
    const postsRef = fire.database().ref("posts");
    postsRef.on('value', (snapshot)=> {
      let postlist = snapshot.val()
      let newPost = [];
      for(let i in postlist){
        if(i === this.props.match.params.id) {
          newPost.push({
            title: postlist[i].title,
            content: postlist[i].content
          });
          this.setState({post: newPost})
          break;
      }
    }
    })
  }

  render(){

    return(
      <div className='PostView__'>
        <Link className='postview_home' to = '/'>HOME</Link>
        {this.state.post.map((item,index)=>{
          return(
            <div className='postcls' key={item}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PostView;
