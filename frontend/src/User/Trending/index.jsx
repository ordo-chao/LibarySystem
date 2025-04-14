import styles from "./index.module.css";
import Layout from "../../Layout";
import Book from '../../Components/Book'
import { useState , useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Trending = () => {
  const [active , setActive] = useState(false)
  const serverIp = 'http://localhost:5000'
  const [data , setData] = useState()
  const [loader , setLoader] = useState(false)
  const [id , setId] = useState("")

  useEffect(() => {
    FetchData()
  }, [])
  function FetchData()
  {
    setLoader(true)
    fetch(`${serverIp}/book/trending`).then(res => res.json()).then(data => setData(data))
    setLoader(false)
  }
  return (
    <Layout>
      {loader ? <div className={styles.loader}><ClipLoader color="#FF6D00" /></div>:
      <div className={styles.container}>
      <h1 className={styles.heading}>Trending books 🔥</h1>
      <h2 className={styles.filterheader} >Time based filter</h2>
      <div className={styles.filters}>
        <div className={styles.filter}>
          <p>This week</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>This Month</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>All Time</p>
          <input type="checkbox" />
        </div>
      </div>
      <h2 className={styles.filterheader}>Genre based filter</h2>
      <div className={styles.filters}>
        <div className={styles.filter}>
          <p>Fiction</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>School</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>Business/Finance</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>Biographies</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>Sci-Fi & Fantasy</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>Non-Fiction</p>
          <input type="checkbox" />
        </div>
      </div>


      <div className={styles.trending}>
        <h1 className={styles.subtitle}>Trending fiction books</h1>
        <div className={styles.books}>
          {data && data.map(book => {
            return (
              <div className={styles.book} key={book._id} onClick={() => {setActive(true) ; setId(book._id)}}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span className={styles.truncate} style={{width: '90%'}} >{data && book.title}</span> </p>
              <p>Author: <span>{data && book.author }</span></p>
              <p>Genre: <span>{data && book.genre }</span></p>
              <p>Rating: <span>{data && book.rating }</span></p>
              <p>Price: <span>{data && book.price }</span></p>
              </div>
            )
          })}
        </div>
        {active && <Book id={id} active={setActive} />}
      </div>
    </div>
      }
    </Layout>
  );
};

export default Trending;