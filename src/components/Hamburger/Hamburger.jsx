// src/components/HamburgerMenu/HamburgerMenu.jsx

import React, { useState } from 'react';
import styles from './Hamburger.module.scss'; // For CSS Modules
import {Link} from "react-router-dom";
const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    const closeMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <nav className={styles.navbar}>
            <button className={`${styles.hamburger} ${isOpen ? styles.active : ''}`} onClick={toggleMenu}
                    aria-label="Toggle Navigation">
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </button>
            <ul className={`${styles.navMenu} ${isOpen ? styles.open : ''}`}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about-me" onClick={closeMenu}>About Me</Link></li>
                <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
                <li><a href="#" onClick={closeMenu}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default HamburgerMenu;