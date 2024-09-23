import React from 'react';
import styles from './HomePage.module.scss';
import Button from "../../components/Button/Button";  // CSS Modules
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handlePrimaryClick = () => {
        console.log('Primary Button Clicked');
        navigate('/projects');
    };

    const headerTitle = "In code as in tales, I craft worlds—one pixel, one line at a time.";
    return (
        <container className={styles.home}>
            <header className={styles.portfolioHeader}>
                <h1 className={styles.headerTitle}>
                    {headerTitle}
                </h1>
                <p className={styles.headerSubtitle}>
                    — Rinat Nadav, weaver of web, words, and wonder.
                </p>
            </header>
            <main className={styles.home}>
                <section>
                    <Button onClick={handlePrimaryClick} variant="primary" text="Explore My Work"/>
                </section>
            </main>
        </container>
    );
};

export default HomePage;