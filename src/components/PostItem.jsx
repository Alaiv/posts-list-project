import React from 'react';
import './../App.css';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const navigate = useNavigate()
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.title} - {props.post.body}
                </div>
            </div>
            <div className='post__btns'>
                <MyButton onClick={() => navigate(`/posts/${props.post.id}`, {replace: true})}>Открыть пост</MyButton>
                <MyButton onClick={() => props.deletePost(props.post.id)}>Удалить пост</MyButton>
            </div>
        </div>
    );
};

export default PostItem;