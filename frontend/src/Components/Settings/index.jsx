import styles from "./index.module.css"
import PropTypes from 'prop-types';


const Settings = (props) =>
  {
    return(
      <div className={styles.overlay}>
        <div className={styles.container}>
        <h1 className={styles.header}>Settings</h1>
        <h2 className={styles.subheader}>👤 Account Information</h2>
        <h2 className={styles.subheader}>✏️ Edit Profile </h2>
        <div className={styles.information}>
          <div className={styles.personalInformation}>
            <div>
              <label>Full Name:</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" placeholder="Enter your Email" />
            </div>
            <div>
              <label>Number:</label>
              <input type="tel" placeholder="Enter your Number" />
            </div>
          </div>
          <div className={styles.personalInformation}>
            <div>
              <label>Postal code:</label>
              <input type="text" placeholder="Postal code" />
            </div>
            <div>
              <label>Address:</label>
              <input type="text" placeholder="Address" />
            </div>
            <div>
              <label>Number:</label>
              <input type="tel" placeholder="Enter your Number" />
            </div>
          </div>
          <div className={styles.personalInformation}>
            <div>
              <label>Old Password:</label>
              <input type="password" placeholder="Postal code" />
            </div>
            <div>
              <label>New Password:</label>
              <input type="password" placeholder="Enter your new password" />
            </div>
            <div>
              <label>Confirm Password:</label>
              <input type="password" placeholder="Enter your old password" />
            </div>
          </div>
          <div className={styles.edit}>
          <button className={styles.delete} onClick={() => props.active(false)}>Cancel</button>
          <button className={styles.logout}>Confirm</button>
        </div>
        </div>
        <hr />
        <h2 className={styles.subheader}>🔔 Notifications </h2>
        <div className={styles.notification} >
        <div>
          <input type="checkbox" />
          <label> Email Alerts</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Personalized Recommendations</label>
        </div>
        </div>
        <hr />
        <h2 className={styles.subheader}>🛑 Danger Zone</h2>
        <div className={styles.danger}>
          <button className={styles.delete}>Delete Account</button>
          <button className={styles.logout}>Logout</button>
        </div>
      </div>
      </div>
    )
  }

  Settings.PropTypes = 
  {
    active: PropTypes.func,
  }

export default Settings