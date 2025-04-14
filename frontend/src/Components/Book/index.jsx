import styles from "./index.module.css"
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Book = (props) => {
  const serverIp = 'http://localhost:5000'
  const [Data, setData] = useState()
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    FetchData()
  }, [])
  function FetchData() {
    setLoader(true)
    fetch(`${serverIp}/book/getBook` , 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: props.id})
      }).then(res => res.json()).then(data => setData(data))
    setLoader(false)
  }
  return (
    <div className={styles.overlay}>
      {loader ? <div className={styles.loader}><ClipLoader color="#FF6D00" /></div> :
        <div className={styles.container}>
          <p className={styles.remove} onClick={() => props.active(false)}>❌</p>
          <div className={styles.book}>
            <img src="src/assets/example.jpeg" alt="" className={styles.img} />
            <div className={styles.details}>
              <p>Title: <span></span>{Data && Data.title} </p>
              <p>Author: <span>{Data && Data.author}</span></p>
              <p>Publisher: <span>{Data && Data.publisher}</span></p>
              <p>Published: <span>{Data && Data.publishedDate}</span></p>
              <p>Genre: <span>{Data && Data.genre}</span></p>
              <p>Price: <span>{Data && Data.price}</span> </p>
              <p>Available: <span>{Data && Data.stock}</span></p>
              {/* <br/> */}
              <p>Description: <span>{Data && Data.description}</span></p>
            </div>
          </div>
          <div className={styles.links}>
            <label>❤️ Add to Wishlist</label>
            <hr className={styles.divider} />
            <label>🛒 Add to Cart</label>
          </div>
          <hr />
          <h2 className={styles.header}>📣 Reviews  </h2>
          <div className={styles.reviews}>
            {Data && Data.reviews.map(review => {
              return (
                <div className={styles.review}>
                  <p>{review.name}</p>
                  <p>{review.review}</p>
                </div>
              )
            })}
          </div>
        </div>}
    </div>
  )
}

Book.PropTypes =
{
  active: PropTypes.func,
  id: PropTypes.string
}

export default Book;