import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products/')
      .then(response => {
        setProducts(response.data); 
      })
      .catch(error => {
        console.error('Il y a eu une erreur lors de la récupération des produits!', error);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Catalogue de Produits</h1>
      <div style={styles.productList}>
        {products.map(product => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.imageUrl} alt={product.name} style={styles.productImage} />
            <h2 style={styles.productName}>{product.name}</h2>
            <p style={styles.productCategory}>{product.category}</p>
            <p style={styles.productPrice}>${product.price}</p>
            <button style={styles.viewButton}>Voir le produit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    color: '#E8E8E8',
    fontFamily: "'Roboto', sans-serif",
  },
  header: {
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#39FF14',
  },
  productList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  productCard: {
    width: '200px',
    backgroundColor: '#1f1f1f',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(57, 255, 20, 0.7)',
    textAlign: 'center',
    padding: '15px',
  },
  productImage: {
    width: '100%',
    borderRadius: '10px',
  },
  productName: {
    fontSize: '1.5rem',
    color: '#39FF14',
  },
  productCategory: {
    fontSize: '1.2rem',
    color: '#FF00FF',
  },
  productPrice: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#FF00FF',
  },
  viewButton: {
    padding: '10px 20px',
    backgroundColor: '#39FF14',
    color: '#090909',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default CatalogPage;
