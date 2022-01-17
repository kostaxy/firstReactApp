import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__links}>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default Navbar
