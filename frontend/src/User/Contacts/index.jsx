import Navbar from "../../Components/Navbar";
import styles from './index.module.css'
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Contacts()
{
  const [firstName , setFirstName] = useState('')
  const [lastName , setLastName] = useState('')
  const [email , setEmail] = useState('')
  const [subject , setSubject] = useState('')
  const [message , setMessage] = useState('')
  const [loader , setLoader] = useState(false)
  const serverIp = 'http://localhost:5000'

  function handleSubmit()
  {
    setLoader(true)
    fetch(`${serverIp}/contact`, 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          subject: subject,
          message: message
        })
      }).then(res => res.json()).then(data => 
        {
          if(data.message === "Message sent successfully")
            {
              alert(data.message)
            }
          console.log(data); setLoader(false)

        }).catch(err => console.log(err))
  }
  return(
    <div>
      <Navbar />
      <h1 className={styles.title}>Contacts us</h1>

      {loader ? <div className={styles.loader}><ClipLoader color="#FF6D00" /></div>:
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
        <form className={styles.form} onSubmit={(e) => {e.preventDefault(); handleSubmit()}} >
          <div className={styles.name}>
            <input type="text" placeholder="First Name" className={styles.inputName} onChange={(e) => setFirstName(e.target.value)} required  />
            <input type="text" placeholder="Last Name" className={styles.inputName} onChange={(e) => setLastName(e.target.value)} required />
          </div>
          <input type="text" placeholder="Email" className={styles.input} onChange={(e) => setEmail(e.target.value)} required />
          <input type="text" placeholder="Subject" className={styles.input} onChange={(e) => setSubject(e.target.value)} required />
          <textarea type="text" placeholder="Message" className={styles.textarea} onChange={(e) => setMessage(e.target.value)} required />
          <button className={styles.submit}>Submit</button>
        </form>
      </div>
    </div>}
    </div>
  )
}

export default Contacts