import React, { useEffect, useState } from 'react'
import { useFetch } from '../components/hooks/useFetch';
import {usePosts} from '../components/hooks/usePosts'
import PostService from '../API/PostService'
import {getPageCount} from '../utils/pages'
import MyButton from '../components/UI/button/MyButton'
import Modal from '../components/UI/Modal/Modal'
import Loader from '../components/UI/Loader/Loader'
import Pagination from '../components/UI/pagination/Pagination'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import PostList from '../components/PostList'


const Posts = () => {
    
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const [fetchPosts, isLoadingPosts, postError] = useFetch(
        async () => {
            const response = await PostService.getAll(limit, page);
            setPosts(response.data)
            const totalCount = response.headers['x-total-count']
            setTotalPages(getPageCount(totalCount, limit))
        }
    )

    const changePage = (page_num) =>{
        setPage(page_num)
    }

    // useMemo(() => {
    //     for (let i = 0; i < totalPages; i++) {
    //         pagesArray.push(i + 1)
    //     }
    // }, [totalPages])


    useEffect(() => {
        fetchPosts();
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (removePost) => {
        setPosts(posts.filter(p => removePost.id !== p.id))
    }

    return (
        <div className="App">
            <MyButton onClick={fetchPosts}>
                Загрузить посты
            </MyButton>
            <Modal visible={modal} setVisible={setModal} >
                <PostForm create={createPost} />
            </Modal>
            <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>Произошла ошибка {postError}</h1>
            }
            {isLoadingPosts
                ? <Loader />
                : <PostList posts={sortedAndSearchPosts} remove={removePost} />
            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages}></Pagination>
        </div>
    )
}

export default Posts
