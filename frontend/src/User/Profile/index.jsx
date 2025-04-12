import Layout from "../../Layout";
import styles from "./index.module.css";
import Settings from "../../Components/Settings";
import { useState } from "react";

const Profile = () => {
  const [active , setActive] = useState(false);
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.profile}>
        <div className={styles.profileImage}>PK</div>
          <p className={styles.username}>Name: PK</p>
          <p className={styles.email}>Email: PK</p>
          <button className={styles.editButton}>Edit Profile</button>
        </div>

        <div className={styles.links}>
          <label>🛒 My Orders</label>
          <hr className={styles.divider} />
          <label onClick={() => setActive(!active)}>⚙️ Settings</label>
        </div>

        <p className={styles.ordersHeader}>Orders</p>
        <div className={styles.orders}>
          <div className={styles.order}>
            <div> 
              <label>🛒 Order #12345</label>
              <label> 📅 Jan 20, 2025  [Delivered]</label>
            </div>
            <label>Book: "Atomic Habits" x1  - KES 600 </label>
            <button className={styles.viewButton} >View Receipt</button>
          </div>
          <div className={styles.order}>
            <div> 
              <label>🛒 Order #12345</label>
              <label> 📅 Jan 20, 2025  [Delivered]</label>
            </div>
            <label>Book: "Atomic Habits" x1  - KES 600 </label>
            <button className={styles.viewButton} >View Receipt</button>
          </div>
          <div className={styles.order}>
            <div> 
              <label>🛒 Order #12345</label>
              <label> 📅 Jan 20, 2025  [Delivered]</label>
            </div>
            <label>Book: "Atomic Habits" x1  - KES 600 </label>
            <button className={styles.viewButton} >View Receipt</button>
          </div>
        </div>

        <p className={styles.ordersHeader}>Wishlist</p>
        <div className={styles.orders}>
          <div className={styles.order}>
            <div> 
              <label>📘 "Atomic Habits" by James Clear </label>
              <label>[KES 600]</label>
            </div>
            <div >
            <button className={styles.remove} >Remove </button>
            <button className={styles.viewButton} >Add to Cart</button>
            </div>
          </div>
          <div className={styles.order}>
            <div> 
              <label>📘 "Atomic Habits" by James Clear </label>
              <label>[KES 600]</label>
            </div>
            <div>
            <button className={styles.remove} >Remove </button>
            <button className={styles.viewButton} >Add to Cart</button>
            </div>
          </div>
          <div className={styles.order}>
            <div> 
              <label>📘 "Atomic Habits" by James Clear </label>
              <label>[KES 600]</label>
            </div>
            <div>
            <button className={styles.remove} >Remove </button>
            <button className={styles.viewButton} >Add to Cart</button>
            </div>
          </div>
          <div className={styles.order}>
            <div> 
              <label>📘 "Atomic Habits" by James Clear </label>
              <label>[KES 600]</label>
            </div>
            <div>
            <button className={styles.remove} >Remove </button>
            <button className={styles.viewButton} >Add to Cart</button>
            </div>
          </div>
        </div>

        {active && <Settings active={setActive} />}
      </div>
    </Layout>
  );
};

export default Profile;