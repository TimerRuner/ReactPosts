import React, {useState} from "react";
import Input from "./UI/Input";
import Buttom from "./UI/Button";

const PostForm = ({ create, setModal }) => {
  const [post, setPost] = useState({
    title: '',
    body: ''
  })

  const addPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
    setModal(false)
  }


  return (
    <form onSubmit={addPost}>
      <Input 
        className="form-control" 
        type="text" 
        placeholder="Title" 
        onChange={e => setPost({...post, title: e.target.value})}
        value={post.title}
      />
      <Input 
        className="form-control" 
        type="text" 
        placeholder="Body" 
        onChange={e => setPost({...post, body: e.target.value})}
        value={post.body}
      />
      <Buttom type="submit" className="btn btn-success">Add</Buttom>
    </form>
  )
}

export default PostForm