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

    return (
        <container className={styles.home}>
            <header className={styles.portfolioHeader}>
                <h1 className={styles.headerTitle}>
                    "In code as in tales, I craft worlds—one pixel, one line at a time."
                </h1>
                <p className={styles.headerSubtitle}>
                    — Rinat Nadav, weaver of web, words, and wonder.
                </p>
            </header>

            {/*<section className={styles.homeHero}>*/}
            {/*    <h1>In code as in tales, I craft worlds—one pixel, one line at a time.</h1>*/}
            {/*    /!*<p>I'm a Frontend Developer.</p>*!/*/}
            {/*    /!*<button className={styles.homeCta}>Explore my work</button>*!/*/}
            {/*    <p></p>*/}
            {/*</section>*/}
            <main className={styles.home}>
                <section>
                    <Button onClick={handlePrimaryClick} variant="primary" text="Explore My Work"/>
                </section>
            </main>

            {/*<section className={styles.homeProjects}>*/}
            {/*    <h2>Recent Projects</h2>*/}
            {/*</section>*/}

            {/*<section className={styles.homeAbout}>*/}

        </container>
    );
};

export default HomePage;