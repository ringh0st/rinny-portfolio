import React from 'react';
import styles from './Projects.module.scss'; // Import the SCSS for styling

const Projects = () => {
    // Placeholder project data - you can later replace it with dynamic data
    const projectData = [
        {
            title: 'Project 1',
            description: 'This is a description of Project 1.',
            link: '#',
        },
        {
            title: 'Project 2',
            description: 'This is a description of Project 2.',
            link: '#',
        },
        {
            title: 'Project 3',
            description: 'This is a description of Project 3.',
            link: '#',
        },
    ];

    return (
        <section className={styles.projectsSection}>
            <h2 className={styles.sectionTitle}>My Projects</h2>
            <div className={styles.projectGrid}>
                {projectData.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectDescription}>{project.description}</p>
                        <a href={project.link} className={styles.projectLink}>
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
