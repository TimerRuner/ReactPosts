import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../components/UI/Loader"
import { useFetching } from "../hooks/useFetching"
import PostServices from "../modules/PostServices"

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchingPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostServices.getById(id)
        setPost(response.data)
    })
    const [fetchingComments, isComLoading, comError] = useFetching(
        async (id) => {
            const response = await PostServices.getCommentById(id)
            setComments(response.data)
        }
    )

    useEffect(() => {
        fetchingPostById(params.id)
        fetchingComments(params.id)
    }, [])

    return (
        <div className="personal-card">
            <div className="card" style={{ marginTop: "20px" }}>
                <div className="card-body">
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <h1
                            className="card-title"
                            style={{ color: "black", fontSize: "30px" }}
                        >
                            {post.id}. {post.title}
                        </h1>
                    )}
                    <div className="card-text" style={{ fontSize: "20px" }}>
                        <h2>Сomments</h2>
                        {isComLoading ? (
                            <Loader />
                        ) : (
                            <div>
                                {comments.map((com) => {
                                    return (
                                        <div
                                            key={com.id}
                                            style={{ marginTop: "20px" }}
                                        >
                                            <h5>{com.email}</h5>
                                            <div>{com.body}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostIdPage
