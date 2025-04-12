import Layout from "../../Layout";
import styles from "./index.module.css";

const Order = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.heading}>Checkout - Order Page </h1>
        <div className={styles.checkout}>
          {/* Custom checkout form */}
          <div className={styles.form}>
            <h2>Customer Information</h2>
            <div>
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="Full Name" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="Email" />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="Phone" />
            </div>
          </div>
          <div className={styles.form}>
            <h2>Delivary Information</h2>
            <div>
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="Address" />
            </div>
            <div>
              <label htmlFor="city">City:</label>
              <input type="text" id="city" name="City" />
            </div>
            <div>
              <label htmlFor="code">Postal Code:</label>
              <input type="text" id="code" name="Postal Code" />
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className={styles.orderSummaryContainer}>
        <div className={styles.orderSummary}>
          <div className={styles.orderItem}>
            <img src="src/assets/example.jpeg" alt="" />
            <div className={styles.details}>
              <p>Book: <span>48 Laws of Power</span></p>
              <p>Author : <span>Robert Greene</span></p>
              <p>Price: <span>KES 600</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <p className={styles.quantity}>
            <p className={styles.remove}>❌</p>
              <span className={styles.qty}>Qty [1]</span> <span className={styles.price}>KES 600</span>
            </p>
          </div>
          <div className={styles.orderItem}>
            <img src="src/assets/example.jpeg" alt="" />
            <div className={styles.details}>
              <p>Book: <span>48 Laws of Power</span></p>
              <p>Author : <span>Robert Greene</span></p>
              <p>Price: <span>KES 600</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <p className={styles.quantity}>
            <p className={styles.remove}>❌</p>
              <span className={styles.qty}>Qty [1]</span> <span className={styles.price}>KES 600</span>
            </p>
          </div>
          <div className={styles.orderItem}>
            <img src="src/assets/example.jpeg" alt="" />
            <div className={styles.details}>
              <p>Book: <span>48 Laws of Power</span></p>
              <p>Author : <span>Robert Greene</span></p>
              <p>Price: <span>KES 600</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <p className={styles.quantity}>
            <p className={styles.remove}>❌</p>
              <span className={styles.qty}>Qty [1]</span> <span className={styles.price}>KES 600</span>
            </p>
          </div>
        </div>

        <p className={styles.subtotal} >Subtotal: <span>KES 1800</span></p>
        <p className={styles.subtotal}>Shipping: <span>KES 100</span></p>
        <hr className={styles.line} />
        <p className={styles.subtotal}>Total: <span>KES 1900</span></p>
        </div>
       <div className={styles.summary}>
       <div className={styles.payment}>
          <h1 className={styles.subheading}>Payment Method </h1>
          <div className={styles.paymentMethod} >
            <label>Cash on Delivery</label>
            <input type="checkbox" />
          </div>
          <div className={styles.paymentMethod}>
            <label>Mobile Money</label>
            <input type="checkbox" />
          </div>
          <div className={styles.confirmation}>
          <input type="checkbox" />
            <label>I confirm my order and delivery details</label>
          </div>
        </div>
        <button type="submit" className={styles.placeOrder} >Place Order</button>
       </div>
      </div>
    </Layout>
  );
};

export default Order;