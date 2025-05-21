import React from 'react';

const Template2 = () => {
  const styles = {
    layout: {
      display: 'flex',
      fontFamily: 'Verdana, sans-serif',
      minHeight: '100vh',
    },
    sidebar: {
      width: '250px',
      background: '#f4f4f4',
      padding: '20px',
      borderRight: '1px solid #ccc',
    },
    content: {
      padding: '40px',
      flex: 1,
    },
    name: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    section: {
      marginBottom: '30px',
    },
    link: {
      textDecoration: 'none',
      color: '#333',
    }
  };

  return (
    <div style={styles.layout}>
      <aside style={styles.sidebar}>
        <div style={styles.name}>Jane Smith</div>
        <p>Software Engineer</p>
        <p>Email: jane.smith@example.com</p>
        <hr />
        <ul>
          <li><a href="#about" style={styles.link}>About</a></li>
          <li><a href="#projects" style={styles.link}>Projects</a></li>
          <li><a href="#skills" style={styles.link}>Skills</a></li>
        </ul>
      </aside>

      <main style={styles.content}>
        <section id="about" style={styles.section}>
          <h2>About Me</h2>
          <p>
            Passionate engineer with experience in full-stack development, data engineering, and cloud infrastructure.
          </p>
        </section>

        <section id="projects" style={styles.section}>
          <h2>Projects</h2>
          <ul>
            <li><strong>AI Resume Parser</strong> – Extracts and scores resumes based on job criteria.</li>
            <li><strong>Job Tracker</strong> – Tracks job applications with automatic reminders.</li>
          </ul>
        </section>

        <section id="skills" style={styles.section}>
          <h2>Skills</h2>
          <p>Python, JavaScript, React, Node.js, GCP, Docker, MongoDB</p>
        </section>
      </main>
    </div>
  );
};

export default Template2;
