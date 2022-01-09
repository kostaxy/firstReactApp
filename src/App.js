import React, { useRef, useState } from 'react'
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'js', body: 'Description' },
        { id: 2, title: 'c', body: 'Description' },
        { id: 3, title: 'java', body: 'Description' },
        { id: 4, title: 'python', body: 'Description' }
    ]);

    const [post, setPost] = useState({body: '', title: ''})

    const addNewPost = (e) => {
        e.preventDefault();
        setPosts([...posts, {...post, id: Date.now()}])
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    text='text'
                    placeholder='Название поста'
                />
                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    text='text'
                    placeholder='Информация о посте'   
                />
                <MyButton onClick={addNewPost}>text</MyButton>
            </form>
            <PostList posts={posts} />
        </div>
    );
}

export default App;
