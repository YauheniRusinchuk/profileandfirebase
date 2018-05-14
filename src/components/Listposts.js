import React from 'react';
import './style/listposts/listposts.css';
import fire from '../config/config';
import Post from './Post';



class Listposts extends React.Component {

  state = {
    posts: []
  }


  updateDatabase = () => {
    const postsRef = fire.database().ref("posts");
    postsRef.on('value', (snapshot)=>{
      let postlist = snapshot.val();
      let newState = [];
      for(let i in postlist) {
        newState.push({
          id: i,
          title: postlist[i].title,
          content: postlist[i].content
        })
      }
      this.setState({posts: newState})
    })

  }

  componentDidMount() {
      this.updateDatabase()
  }


  render(){
    const posts = this.state.posts.reverse();
      return(
        <div className='listposts'>
          {
            posts.map((item)=>{
                return (
                  <Post key={item.id}
                        title={item.title}
                        content={item.content}
                        id = {item.id} />
                );
            })
          }
        </div>
    );
  }
}

export default Listposts;
