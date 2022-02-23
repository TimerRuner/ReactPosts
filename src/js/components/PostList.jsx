import React from "react";
import Post from "./Post";
import Message from "./UI/Message";

const PostList = ({ posts, title, remove }) => {

  if(!posts.length){
    return(
      <Message text="No Posts"/>
    )
  }

  return(
    <div className="container">
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {
        posts.map((post, index) => 
          <Post post={post} number={index + 1} key={post.id} remove={remove}/>
        )
      }
    </div>
  )
}

export default PostList