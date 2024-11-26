import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bienvenue sur notre site !</h1>
      <p style={styles.description}>
        Ce site est une vitrine de produits dans un style Cyberpunk. Explorez notre
        catalogue, découvrez nos produits et plus encore !
      </p>

      <div style={styles.links}>
        <Link to="/catalog" style={styles.link}>Voir le catalogue</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#1e1e1e',  // Cyberpunk background
    color: '#00FF00',  // Neon green text color
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '3rem',
    color: '#00FF00',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.5rem',
    color: '#FFF',
    marginBottom: '40px',
    textAlign: 'center',
    maxWidth: '600px',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  link: {
    color: '#FF00FF',  // Neon purple for links
    fontSize: '1.25rem',
    textDecoration: 'none',
    border: '2px solid #FF00FF',
    padding: '10px',
    borderRadius: '5px',
    transition: 'all 0.3s',
  },
};

export default HomePage;
