import React from 'react';
import styles from './HomePage.module.scss';  // CSS Modules

const HomePage = () => {
    return (
        <main className={styles.home}>
            <section className={styles.homeHero}>
                <h1>Welcome to My Portfolio</h1>
                {/*<p>I'm a Frontend Developer.</p>*/}
                {/*<button className={styles.homeCta}>Explore my work</button>*/}
            </section>

            <section className={styles.homeProjects}>
                <h2>Recent Projects</h2>
            </section>

            <section className={styles.homeAbout}>
                <h2>About Me</h2>
                <p>Quick bio or mission statement goes here.</p>
            </section>
        </main>
    );
};

export default HomePage;