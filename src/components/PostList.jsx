import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts, remove }) => {

    if (!posts.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>Постов няма</h1>
        )
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Посты</h1>
            {posts.map((post, index) =>
                <PostItem number={index + 1} post={post} key={post.id} remove={remove} />
            )}
        </div>
    )
}

export default PostList
