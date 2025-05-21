import React from 'react';
import userData from './user_data.json'; // path relative to Template1.jsx

const Template1 = () => {
  const { name, title, email, about, projects, skills } = userData;

  const styles = {
    container: {
      fontFamily: 'Segoe UI, sans-serif',
      padding: '50px',
      backgroundColor: '#121212',
      color: '#ffffff',
      minHeight: '100vh',
    },
    header: {
      borderBottom: '2px solid #333',
      marginBottom: '30px',
    },
    name: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    section: {
      marginBottom: '30px',
    },
    project: {
      marginLeft: '20px',
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.name}>{name}</div>
        <p>{title}</p>
        <p>Email: {email}</p>
      </header>

      <section style={styles.section}>
        <h2>About Me</h2>
        <p>{about}</p>
      </section>

      <section style={styles.section}>
        <h2>Projects</h2>
        <ul style={styles.project}>
          {projects.map((project, index) => (
            <li key={index}>
              <strong>{project.name}</strong> – {project.description}
            </li>
          ))}
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Skills</h2>
        <p>{skills.join(', ')}</p>
      </section>
    </div>
  );
};

export default Template1;
