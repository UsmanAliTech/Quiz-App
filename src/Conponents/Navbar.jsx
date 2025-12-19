import { div } from 'framer-motion/client'
import React from 'react'

const Navbar = () => {
    return (
        <div className='Quiz-app-container'>
            <nav className='navbar bg-custom-dark navbar-dark'>
                <span className='navbar-brand mb-0 h1 mx-auto'>
                    Quiz App
                </span>
            </nav>
        </div>
    )
}

export default Navbar
