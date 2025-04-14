import styles from "./index.module.css";
import Layout from "../../Layout";
import Book from '../../Components/Book'
import { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Recommended = () => {
  const [active, setActive] = useState(false)
  const serverIp = 'http://localhost:5000'
  const [data, setData] = useState()
  const [loader, setLoader] = useState(false)
  const [id, setId] = useState("")

  useEffect(() => {
    FetchData()
  }, [])
  function FetchData() {
    setLoader(true)
    fetch(`${serverIp}/book/recommended`).then(res => res.json()).then(data => { setData(data); console.log(data) })
    setLoader(false)
  }
  return (
    <Layout>
      {loader ? <div className={styles.loader}><ClipLoader color="#FF6D00" /></div>:
      <div className={styles.container}>
      <h1 className={styles.heading}>🌟 Recommended Reads </h1>
      <div className={styles.Recommended}>
        <div className={styles.books}>
          {data && data.map(book => {
            return (
              <div className={styles.book} key={book._id} onClick={() => { setActive(true); setId(book._id) }}>
                <img src="src/assets/example.jpeg" alt="" className={styles.image} />
                <p>Book: <span className={styles.truncate} style={{ width: '90%' }} >{data && book.title}</span> </p>
                <p>Author: <span className={styles.truncate} style={{ width: '90%' }}>{data && book.author}</span></p>
                <p>Genre: <span>{data && book.genre}</span></p>
                <p>Rating: <span>{data && book.rating}</span></p>
                <p>Price: <span>{data && book.price}</span></p>
              </div>
            )
          })}

        </div>
      </div>

      <p className={styles.refresh} >🔍 Explore All Recommendations</p>
      {active && <Book id={id} active={setActive} />}
    </div>
      }
    </Layout>
  );
};

export default Recommended;