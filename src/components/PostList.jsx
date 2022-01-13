import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
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

            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={300}
                        classNames="post"
                    >
                        <PostItem number={index + 1} post={post} remove={remove} />
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    )
}

export default PostList
