import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, deletePost, title}) => {
    if(!posts.length) {
        return (<h1 style={{textAlign: "center"}}>Посты не найдены</h1>)
    }

    const mapPosts = posts.map((post, index) =>
        <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
        >
            <PostItem  number={index + 1} post={post} deletePost={deletePost}/>
        </CSSTransition>
    )
    return (
        <div>
            <h1 style={{textAlign: "center", marginTop: 20, marginBottom: 20}}>{title}</h1>
            <TransitionGroup>{mapPosts}</TransitionGroup>
        </div>
    );
};

export default PostList;