import React from 'react'
import { useState } from 'react/cjs/react.development'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({create}) => {
    
    const [post, setPost] = useState({body: '', title: ''})

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ body: '', title: '' })
    }
    return (
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
    )
}

export default PostForm
