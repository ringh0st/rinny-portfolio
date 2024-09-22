import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Icons from react-icons
import styles from './Footer.module.scss'; // Import SCSS styles

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialLinks}>
                <a href="https://github.com/ringh0st" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/rinat-nadav-04a8b618b/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="mailto:ringhost@gmail.com">
                    <FaEnvelope />
                </a>
            </div>
            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} Rinat Nadav. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
