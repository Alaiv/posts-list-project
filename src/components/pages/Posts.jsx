import React, {useEffect, useRef, useState} from "react";
import {usePosts} from "../hooks/UsePosts";
import {useFetching} from "../hooks/useFetching";
import {API} from "../API/api";
import {getPagesCount} from "../assets/pages";
import MyModal from "../UI/MyModal/MyModal";
import PostForm from "../PostForm";
import MyButton from "../UI/button/MyButton";
import PostFilter from "../PostFilter";
import PreLoader from "../UI/Loader/PreLoader";
import PostList from "../PostList";
import {UseIntersection} from "../hooks/useIntersection";
import DropDownList from "../UI/dropDown-list/DropDownList";
import Pagination from "../UI/Pagination";

function Posts() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', filter: ''})
    const [visible, setVisible] = useState(false)
    const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.filter)
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10)
    const [scrollLimit, setScrollLimit] = useState(10)
    const [totalPages, setTotalPages] = useState(0)
    // //получаем последний элемент постов
    const lastElement = useRef()

    // //бесконечная лента, добавление новой порции к старой в массиве
    const [fetchPosts, isLoading, error] = useFetching(async (limit, page) => {
        const response = await API.getPosts(limit, page)
        if (limit !== scrollLimit) {
            setPosts(response.data)
            setScrollLimit(limit)
        } else {
            setPosts([...posts, ...response.data])
        }
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getPagesCount(totalCount, limit))
    })
    //
    // //кастомный хук для бесконечной ленты
    UseIntersection(isLoading, lastElement, page < totalPages, () => {
        setPage(page + 1)
    })

    //Обычная пагинация
    // const [fetchPosts, isLoading, error] = useFetching(async () => {
    //     const response = await API.getPosts(limit, page)
    //     setPosts(response.data)
    //     const totalCount = (response.headers['x-total-count'])
    //     setTotalPages(getPagesCount(totalCount, limit))
    // })


    //вопрос об обновлении при смене лимита
    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const postAdder = (post) => {
        setPosts(() => [...posts, post])
        setVisible(false)
    }

    const deletePost = (id) => {
        setPosts(posts.filter(post => id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className='App'>
            <MyModal visible={visible} setVisible={setVisible}>
                <PostForm posts={posts} postAdder={postAdder}/>
            </MyModal>
            <MyButton onClick={() => setVisible(true)}>Добавить посты</MyButton>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <DropDownList
                value={limit}
                onChange={val => setLimit(val)}
                defaultVal='Список постов'
                options={[
                    {value: 5, name: '5 постов'},
                    {value: 10, name: '10 постов'},
                    {value: 25, name: '25 постов'},
                    {value: -1, name: 'Показать все'},
                ]}
            />
            {error && <h1>Произошла ошибка {error}</h1>}
            <PostList posts={sortedAndFilteredPosts}
                      deletePost={deletePost}
                      title={'Список постов'}
            />
            <div ref={lastElement} style={{height: 20}}/>
            {isLoading && <div style={{display: 'flex', justifyContent: 'center', marginTop: 75}}><PreLoader/></div>}
            {/*список страниц для пагинации*/}
            <Pagination page={page} totalPages={totalPages} changePage={changePage}/>
        </div>
    );
}

export default Posts;