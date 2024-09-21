// src/components/HamburgerMenu/HamburgerMenu.jsx

import React, { useState } from 'react';
import styles from './Hamburger.module.scss'; // For CSS Modules
import {Link} from "react-router-dom";
const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <nav className={`${styles.navbar} ${isOpen ? styles.active : ''}`}>
            <button className={`${styles.hamburger} ${isOpen ? styles.active : ''}`} onClick={toggleMenu}
                    aria-label="Toggle Navigation">
                <span className={`${styles.line} ${styles.line1}`}></span>
                <span className={`${styles.line} ${styles.line2}`}></span>
                <span className={`${styles.line} ${styles.line3}`}></span>
            </button>
            {isOpen && (
                <ul className={styles['nav-menu']}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-me">About Me</Link></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            )}
        </nav>
    );
};

export default HamburgerMenu;