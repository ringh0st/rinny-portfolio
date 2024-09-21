import React from 'react';
import styles from './AboutMe.module.scss'; // Correct module import

const AboutMe = () => {
    return (
        <main className={styles.home}>
            <section className={styles.quickBioSection}>
                <h2 className={styles.bioTitle}>About Me</h2>
                <article className={styles.quickBio}>
                    <p>
                        Hello! I’m Rinat Nadav, a passionate web developer since 2020, dedicated to crafting
                        engaging and dynamic user experiences. With a love for frontend development, I thrive on
                        bringing ideas to life using JavaScript and CSS, always adhering to best practices for clean
                        and efficient code.
                    </p>
                    <p>
                        My creative journey doesn’t stop at coding; I’m a reader and board game enthusiast who
                        finds inspiration in fantasy and sci-fi classics like <em>The Lord of the
                        Rings</em> and <em>Jurassic Park</em>. Whether I'm painting or drawing, I embrace
                        minimalistic design, harmonizing beauty and functionality.
                    </p>
                    <p>
                        Residing in the serene landscapes of Finland, I draw inspiration from nature and music,
                        infusing my work with a sense of wonder and creativity. Join me as I explore the
                        intersection of technology and art, crafting websites that not only look great but also tell
                        a story.
                    </p>
                </article>
            </section>
        </main>
    );
};

export default AboutMe;
