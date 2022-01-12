import React, { useMemo, useRef, useState } from 'react'
import Counter from './components/Counter';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import Modal from './components/UI/Modal/Modal';
import Select from './components/UI/select/Select';
import './styles/App.css';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'js', body: 'Description' },
        { id: 2, title: 'c', body: 'asd' },
        { id: 3, title: 'java', body: '213132' },
        { id: 4, title: 'python', body: 'sfgdsg' }
    ]);

    const [filter, setFilter] = useState({ sort: '', query: '' })

    const [modal, setModal] = useState(false)

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (removePost) => {
        setPosts(posts.filter(p => removePost.id !== p.id))
    }

    return (
        <div className="App">
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
            <PostList posts={sortedAndSearchPosts} remove={removePost} />
        </div>
    );
}

export default App;
