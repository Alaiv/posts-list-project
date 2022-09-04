import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {useState} from "react";

const PostForm = ({postAdder}) => {
    const [postText, setPostText] = useState({title: '', body: ''})

    const postAdded = (e) => {
        e.preventDefault()
        const newPost = {...postText, id: Math.random()}
        postAdder(newPost)
        setPostText({
            title: '',
            body: '',
        })
    }

    return (
        <form>
            <MyInput  value={postText.title} placeholder={'Введите название поста'}
                      onChange={(e) => setPostText({...postText, title: e.currentTarget.value})}/>
            <MyInput  value={postText.body} placeholder={'Введите описание поста'}
                      onChange={(e) => setPostText({...postText, body: e.currentTarget.value})}/>
            <MyButton onClick={postAdded} name={'Добавить пост'}>Добавить пост</MyButton>
        </form>
    );
};

export default PostForm;