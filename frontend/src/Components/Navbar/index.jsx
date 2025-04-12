import styles from './index.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
  const path = window.location.pathname;
  return (
    <div className={styles.container}>
      <div className={styles.bookify}>
        <span className={styles.logoicon}>📚</span>
        <span className={styles.logotext}><span className={styles.highlight}>Booki</span>Fy</span>
      </div>

      <div className={styles.links}>
        <Link to="/" style={path === '/' ? { color: '#FF6D00' } : { color: '#0A3723' }}>Home</Link>
        <Link to="/products" style={path === '/products' ? { color: '#FF6D00' } : { color: '#0A3723' }}>Search</Link>
        <Link to="/about" style={path === '/about' ? { color: '#FF6D00' } : { color: '#0A3723' }}>About us</Link>
        <Link to="/contact" style={path === '/contact' ? { color: '#FF6D00' } : { color: '#0A3723' }}>Order</Link>
        <Link to="/education" style={path === '/education' ? { color: '#FF6D00' } : { color: '#0A3723' }}>Profile</Link>
      </div>


    </div>
  )
}

export default Navbar