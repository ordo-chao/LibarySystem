import Layout from "../../Layout";
import styles from "./index.module.css";
import Settings from "../../Components/Settings";
import { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Profile = () => {
  const [active, setActive] = useState(false);
  const serverIp = 'http://localhost:5000'
  const [data, setData] = useState()
  const [loader, setLoader] = useState(false)
  const [id, setId] = useState("")
  const [orders, setOrders] = useState([])
  const [wishlists, setWishlists] = useState([])

  useEffect(() => {
    FetchData()
  }, [])
  async function FetchData() {
    setLoader(true);
    try {
      const userId = "67fc77f0d4547840b53b4d25";
  
      const profileRes = await fetch(`${serverIp}/profile/get`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: userId }),
      });
      const profileData = await profileRes.json();
      setData(profileData);
      console.log("Profile:", profileData);
  
      const ordersRes = await fetch(`${serverIp}/order/getOrder`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: userId }),
      });
      const ordersData = await ordersRes.json();
      setOrders(ordersData);
      console.log("Orders:", ordersData);
  
      const wishlistsRes = await fetch(`${serverIp}/wishlist/getWishlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: userId }),
      });
      const wishlistsData = await wishlistsRes.json();
      setWishlists(wishlistsData);
      console.log("Wishlists:", wishlistsData);
  
    } catch (error) {
      console.error("Error fetching profile data:", error);
    } finally {
      setLoader(false);
    }
  }
  
  return (
    <Layout>
      {loader ? <div className={styles.loader}><ClipLoader color="#FF6D00" /></div> :
        <div className={styles.container}>
          <div className={styles.profile}>
            <div className={styles.profileImage}>PK</div>
            <p className={styles.username}>Name: {data && data.name}</p>
            <p className={styles.email}>Email: {data && data.email}</p>
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
      }
    </Layout>
  );
};

export default Profile;