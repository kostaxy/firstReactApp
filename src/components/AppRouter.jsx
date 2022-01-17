import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/About/About'
import Error from '../pages/Error'
import Posts from '../pages/Posts'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/posts' element={<Posts />} />
            <Route path='/about' element={<About />} />
            <Route path='/error' element={<Error />} />
            <Route path='*' element={<Navigate replace to='/error' />} />
        </Routes>
    )
}

export default AppRouter
