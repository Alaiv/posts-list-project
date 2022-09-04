import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "./hooks/useFetching";
import {API} from "./API/api";
import PreLoader from "./UI/Loader/PreLoader";

const PostsPage = () => {
    const params = useParams()
    const [postPage, setPostPage] = useState({})
    const [postComment, setPostComment] = useState([])

    const [fetchPosts, isLoading, error] = useFetching(async () => {
        const response = await API.getPostPage(params.id)
        setPostPage(response.data)
    })
    const [fetchComments, isLoadingC, errorC] = useFetching(async () => {
        const response = await API.getPostComment(params.id)
        setPostComment(response.data)
        console.log(response.data)
    })

    useEffect(() => {
        fetchPosts()
        fetchComments()
    }, [params.id])


    const postComments = postComment.map(c =>
        <div key={c.id} style={{marginTop: '10px'}}>
            <div><b>Имя: </b>{c.name} </div>
            <div><b>Почта: </b>{c.email}</div>
            <div><b>Комментарий: </b>{c.body}</div>
        </div>)

    return (
        <div style={{marginTop: 100}}>
            <h1>Пост с номером {postPage.id}</h1>
            {error && <h1>Произошла ошибка</h1>}
            {isLoading && <PreLoader/>}
            <h1>{postPage.title}</h1>
            <div>{postPage.body}</div>
            <h1>Комментарии:</h1>
            <div>
                {isLoadingC
                    ? <PreLoader/>
                    : <div>{postComments}</div>
                }

            </div>
        </div>
    );
};

export default PostsPage;