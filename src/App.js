import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PostService from './API/PostService';
import { usePosts } from './components/hooks/usePosts';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import Loader from './components/UI/Loader/Loader';
import Modal from './components/UI/Modal/Modal';
import './styles/App.css';

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

    const [isLoadingPosts, setIsLoadingPosts] = useState(false)

    useEffect(() => {
        fetchPosts();
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (removePost) => {
        setPosts(posts.filter(p => removePost.id !== p.id))
    }

    async function fetchPosts() {
        setIsLoadingPosts(true)
        setTimeout(async () => {
            const posts = await PostService.getAll();
            setPosts(posts)
            setIsLoadingPosts(false)
        }, 1000);

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
            {isLoadingPosts
                ? <Loader />
                : <PostList posts={sortedAndSearchPosts} remove={removePost} />
            }
        </div>
    );
}

export default App;
