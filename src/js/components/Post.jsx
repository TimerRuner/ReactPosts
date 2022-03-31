import React from "react"
import Buttom from "./UI/Button"
import { useNavigate } from "react-router-dom"

const Post = (props) => {
    const router = useNavigate()

    return (
        <div className="card" style={{ marginBottom: "20px" }}>
            <div className="card-body">
                <strong className="card-title" style={{ fontSize: "25px" }}>
                    {props.number}. {props.post.title}
                </strong>
                <p className="card-text" style={{ fontSize: "20px" }}>
                    {props.post.body}
                </p>
                <Buttom
                    className="btn btn-danger"
                    onClick={() => props.remove(props.post)}
                >
                    Delete
                </Buttom>
                <Buttom
                    className="btn btn-success open-btn"
                    onClick={() => router(`/posts/${props.post.id}`)}
                >
                    Open
                </Buttom>
            </div>
        </div>
    )
}

export default Post
