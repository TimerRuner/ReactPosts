import React, { useState, useEffect, useRef } from "react";
import PostList from "../components/PostList";
import Button from "../components/UI/Button";
import Modal from "../components/UI/Modal";
import PostForm from "../components/PostForm";
import { useFetching } from "../hooks/useFetching";
import PostServices from "../modules/PostServices";
import Message from "../components/UI/Message";
import Loader from "../components/UI/Loader";
import PostFilter from "../components/PostFilter";
import { usePosts } from "../hooks/usePosts";
import { useObserver } from "../hooks/useObserver";
import { getPagesCount } from "../utils/getPagesCount";


const Posts = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({
    query: '',
    sort: ''
  })

  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const lastElement = useRef()

  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  

  const [fetching, isLoading, error] = useFetching(async (limit, page) => {
    const response = await PostServices.getAll(limit, page);
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  })


  useObserver(lastElement, page < totalPages, isLoading, () => {
    setPage(page + 1)
  })

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const createPost = (post) => {
    setPosts([...posts, post])
  }

  useEffect(() => {
    fetching(limit, page)
  }, [limit, page])

  return(
    <div className="App">
      <div className="container">
        <div>
          <Button className="btn btn-success" onClick={() => setModal(true)}>Add post</Button>
        </div>
        <hr />
        <div>
          <PostFilter filter={filter} setFilter={setFilter}/>
        </div>
      </div>
      <Modal visible={modal} setModal={setModal}>
        <PostForm create={createPost} setModal={setModal}/>
      </Modal>

      {error && (
        <Message text="Помилка із запитом на сервер" type="danger"/>
      )}
      <PostList posts={sortedAndSearchedPosts} title={'Posts list'} remove={removePost}/>
      <div ref={lastElement} style={{backgroundColor: 'red', height: '10px'}}></div>  
      {isLoading && 
         <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
      }
      
     
    </div>
  )
}

export default Posts
