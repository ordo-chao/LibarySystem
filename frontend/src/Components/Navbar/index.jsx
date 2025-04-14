import { useEffect, useRef } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const path = window.location.pathname;
  return (
    <div className={styles.container}>

      <div className={styles.bookify}>
        <span className={styles.logoicon}>📚</span>
        <span className={styles.logotext}><span className={styles.highlight}>Booki</span>Fy</span>
      </div>

      <GoogleLoginButton />

      <div className={styles.links}>
        <Link to="/" style={path === '/' || path === '/trending' || path === '/foryou' || path === '/onsale' || path === '/newarrivals' || path === '/recommended' || path === '/genre' ? { color: '#FF6D00' } : { color: '#0A3723' }}>Home</Link>
        <Link to="/search" style={path === '/search' ? { color: '#FF6D00' } : { color: '#0A3723' }}>Search</Link>
        <Link to="/order" style={path === '/order' ? { color: '#FF6D00' } : { color: '#0A3723' }}>Order</Link>
        <Link to="/about" style={path === '/about' ? { color: '#FF6D00' } : { color: '#0A3723' }}>About us</Link>
        <Link to="/contact" style={path === '/contact' ? { color: '#FF6D00' } : { color: '#0A3723' }}>Contact Us</Link>
        <Link to="/profile" style={path === '/profile' ? { color: '#FF6D00' } : { color: '#0A3723' }}>Profile</Link>
      </div>
    </div>
  );
}


function GoogleLoginButton() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const loadGoogle = () => {
      if (window.google && window.google.accounts) {
        window.google.accounts.id.initialize({
          client_id: "398653173102-qqb6km1sjdmqiur21vgkorfnrukcdppc.apps.googleusercontent.com",
          callback: handleCredentialResponse,
        });

        window.google.accounts.id.renderButton(buttonRef.current, {
          theme: "outline",
          size: "large",
        });
      }
    };

    // Check if script is loaded, wait for it
    if (window.google && window.google.accounts) {
      loadGoogle();
    } else {
      window.addEventListener("load", loadGoogle);
    }

    return () => window.removeEventListener("load", loadGoogle);
  }, []);

  const handleCredentialResponse = (response) => {
    const idToken = response.credential;
    console.log("Received ID token:", idToken);

    fetch("http://localhost:5000/auth/google-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    })
      .then(res => res.json())
      .then(data => {
        console.log("User info:", data);
      })
      .catch(err => console.error("Login failed:", err));
  };

  return <div ref={buttonRef}></div>;
}


export default Navbar;
