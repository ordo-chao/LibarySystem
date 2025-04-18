import styles from "./index.module.css"
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { useContext } from "react";
import { LoginContext } from "../../loginContext";

const Book = (props) => {
  const serverIp = 'http://localhost:5000'
  const [Data, setData] = useState()
  const [loader, setLoader] = useState(false)
  const { cart , setCart } = useContext(LoginContext)
  function AddToCart(Data) {
    localStorage.setItem("cart", JSON.stringify([...cart, Data]));
    setCart([...cart, Data])
  }
  useEffect(() => {
    FetchData()
  }, [])
  function FetchData() {
    setLoader(true)
    fetch(`${serverIp}/book/getBook`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: props.id })
      }).then(res => res.json()).then(data => setData(data))
    setLoader(false)
  }
  return (
    <div className={styles.overlay}>
      {loader ? <div className={styles.loader}><ClipLoader color="#FF6D00" /></div> :
        <div className={styles.container}>
          <p className={styles.remove} onClick={() => props.active(false)}>❌</p>
          <div className={styles.book}>
            <iframe src={`${serverIp}/${Data && Data.pdfUrl}`} frameBorder="0" allowFullScreen width={"100%"} height={"500px"} />
            <div className={styles.details}>
              <h1 className={styles.title}>{Data && Data.title} </h1>
              <p>Author: <span>{Data && Data.author}</span></p>
              <p>Publisher: <span>{Data && Data.publisher}</span></p>
              <p>Published: <span>{Data && Data.publishedDate}</span></p>
              <p>Genre: <span>{Data && Data.genre}</span></p>
              <p>Price: <span>{Data && Data.price}</span> </p>
              <p>Rating:{" "}<span>{"⭐".repeat(Math.floor(Data?.ratingsAverage || 0))}{"☆".repeat(5 - Math.floor(Data?.ratingsAverage || 0))}</span></p>
              <p>Available Stock: <span>{Data && Data.stock}</span></p>
              {/* <br/> */}
              <p>Description: <span>{Data && Data.description}</span></p>
            </div>
          </div>
          <div className={styles.links}>
            <label>❤️ Add to Wishlist</label>
            <hr className={styles.divider} />
            <label onClick={() => AddToCart(Data)}>🛒 Add to Cart</label>
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