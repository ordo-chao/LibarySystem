import Navbar from "../../Components/Navbar";
import styles from './index.module.css'

function Contacts()
{
  return(
    <div>
      <Navbar />
      <h1 className={styles.title}>Contacts us</h1>

      <div className={styles.contactsform}>
        <div className={styles.contactInfo}>
          <h1 className={styles.subheader}>Contact Information</h1>
          <p className={styles.description}>Reach out to us through the contacts shared below: </p>
          <p className={styles.contact}><img src="/Icons/phone.png" alt="Phone" width={24} height={24} /> <a href="tel:+2541414892" >+2547 41 414892</a></p>
          <p className={styles.contact}> <img src="/Icons/message.png" alt="Phone" width={24} height={24} /> <a href="mailto:princeben9312@gmail.com" >princeben9312@gmail.com</a></p>
          <p className={styles.contact}> <img src="/Icons/location.png" alt="Phone" width={24} height={24} />Nairobi, Kenya</p>
        </div>

        <div className={styles.sendInformation}>
          <h1 className={styles.subheader}>Send us a message</h1>
          <div className={styles.form}>
            <div className={styles.name}>
              <input type="text" placeholder="First Name" className={styles.inputName} />
              <input type="text" placeholder="Last Name" className={styles.inputName} />
            </div>
            <input type="text" placeholder="Email" className={styles.input} />
            <input type="text" placeholder="Subject" className={styles.input} />
            <textarea type="text" placeholder="Message" className={styles.textarea} />
            <button className={styles.submit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts