import React from "react";
import Buttom from "./UI/Button";

const Post = (props) => {
  return(
    <div className="card" style={{marginBottom: '20px'}}>
      <div className="card-body">
        <strong className="card-title" style={{fontSize: '25px'}}>{props.number}. {props.post.title}</strong>
        <p className="card-text" style={{fontSize: '20px'}}>{props.post.body}</p>
        <Buttom className="btn btn-danger" onClick={() => props.remove(props.post)}>Delete</Buttom> 
      </div>
    </div>
  )
}

export default Post;