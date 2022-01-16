import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import './styles/App.css';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Link to="/posts">posts</Link>
                <Link to="/about">about</Link>
            </div>
            <Routes>
                <Route path='/posts' element={<Posts/>}>
                </Route>
                <Route path='/about' element={<About />}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
