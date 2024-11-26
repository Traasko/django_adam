import React, { useState } from 'react';

const productsData = [
  { id: 1, name: "Casque VR", category: "Technologie", price: 299.99, imageUrl: "https://via.placeholder.com/150" },
  { id: 2, name: "Lunettes LED", category: "Accessoires", price: 49.99, imageUrl: "https://via.placeholder.com/150" },
  { id: 3, name: "Montre Connectée", category: "Technologie", price: 199.99, imageUrl: "https://via.placeholder.com/150" },
  { id: 4, name: "T-shirt Cyberpunk", category: "Vêtements", price: 29.99, imageUrl: "https://via.placeholder.com/150" },
  { id: 5, name: "Clé USB 1TB", category: "Technologie", price: 89.99, imageUrl: "https://via.placeholder.com/150" },
];

const CatalogPage = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState(0);

  const filteredProducts = productsData.filter(product => {
    return (
      (categoryFilter === "All" || product.category === categoryFilter) &&
      product.price >= priceFilter
    );
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Catalogue des Produits</h1>
      
      <div style={styles.filters}>
        <div style={styles.filterGroup}>
          <label style={styles.filterLabel}>Catégorie:</label>
          <select
            style={styles.filterSelect}
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="All">Toutes les catégories</option>
            <option value="Technologie">Technologie</option>
            <option value="Accessoires">Accessoires</option>
            <option value="Vêtements">Vêtements</option>
          </select>
        </div>

        <div style={styles.filterGroup}>
          <label style={styles.filterLabel}>Prix minimum:</label>
          <input
            type="number"
            style={styles.filterInput}
            value={priceFilter}
            onChange={(e) => setPriceFilter(Number(e.target.value))}
          />
        </div>
      </div>

      <div style={styles.productList}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <div style={styles.productInfo}>
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.productCategory}>{product.category}</p>
              <p style={styles.productPrice}>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    background: 'linear-gradient(180deg, #1f1f1f 0%, #090909 100%)', // Arrière-plan sombre avec un effet de dégradé
    color: '#E8E8E8',  // Texte gris clair pour contraste
    fontFamily: "'Roboto', sans-serif",  // Police moderne
    minHeight: '100vh',  // S'assure que la page prend toute la hauteur
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#39FF14',  // Néon vert
    textAlign: 'center',
    marginBottom: '30px',
    textShadow: '0 0 10px #39FF14',  // Effet néon sur le titre
  },
  filters: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
    padding: '0 10%',
  },
  filterGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  filterLabel: {
    color: '#39FF14',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  filterSelect: {
    padding: '12px',
    fontSize: '1.1rem',
    borderRadius: '10px',
    border: '2px solid #39FF14',
    backgroundColor: '#090909',
    color: '#39FF14',
    outline: 'none',
    boxShadow: '0 0 8px rgba(57, 255, 20, 0.8)',  // Légère ombre néon
  },
  filterInput: {
    padding: '12px',
    fontSize: '1.1rem',
    borderRadius: '10px',
    border: '2px solid #39FF14',
    backgroundColor: '#090909',
    color: '#39FF14',
    outline: 'none',
    boxShadow: '0 0 8px rgba(57, 255, 20, 0.8)',  // Ombre néon
  },
  productList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '30px',
    padding: '0 10%',
  },
  productCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: '15px',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    boxShadow: '0 0 15px rgba(57, 255, 20, 0.5)',  // Ombre néon autour du produit
    cursor: 'pointer',
    position: 'relative',
    height: '350px',  // Fixe la hauteur des cartes pour avoir une taille homogène
  },
  productCardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 0 25px rgba(57, 255, 20, 0.8)',  // Effet d'agrandissement avec une ombre forte
  },
  productImage: {
    width: '100%',
    height: '60%',
    objectFit: 'cover',
    borderBottom: '2px solid #39FF14',  // Bordure verte néon sous l'image
  },
  productInfo: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productName: {
    fontSize: '1.4rem',
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  productCategory: {
    color: '#39FF14',
    marginBottom: '10px',
  },
  productPrice: {
    color: '#FF00FF',  
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },
};

export default CatalogPage;
