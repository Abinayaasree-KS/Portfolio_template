import React from 'react';

const Template1 = () => {
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
        <div style={styles.name}>John Doe</div>
        <p>Full Stack Developer | React | Django | AWS</p>
        <p>Email: john@example.com</p>
      </header>

      <section style={styles.section}>
        <h2>About Me</h2>
        <p>
          I build scalable full-stack applications with a strong focus on performance and UI/UX. I specialize in React, Django, and cloud platforms like AWS.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Projects</h2>
        <ul style={styles.project}>
          <li><strong>Smart Task Manager</strong> – AI-powered task automation system.</li>
          <li><strong>Portfolio Builder</strong> – Tool to generate professional portfolios dynamically.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Skills</h2>
        <p>React, Django, REST API, PostgreSQL, AWS, Git, Docker</p>
      </section>
    </div>
  );
};

export default Template1;
