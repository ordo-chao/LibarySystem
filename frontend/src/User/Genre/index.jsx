import styles from "./index.module.css";
import Layout from "../../Layout";
import Book from '../../Components/Book'
import { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Genre = () => {
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
    fetch(`${serverIp}/book/onSale`).then(res => res.json()).then(data => { setData(data); console.log(data) })
    setLoader(false)
  }
  return (
    <Layout>
      {loader ? <div className={styles.loader}><ClipLoader color="" /></div>:
      <div className={styles.container}>
      <h1 className={styles.heading}>Genre</h1>
      <h2 className={styles.filterheader} > 🧭 Browse By Genre / Subject   </h2>
      <div className={styles.filters}>
        {/* Time Filters */}
        <div className={styles.filter}>
          <p>⏱️ This Week</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>🗓️ This Month</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>📅 All Time</p>
          <input type="checkbox" />
        </div>

        {/* Genre Filters */}
        <div className={styles.filter}>
          <p>📘 Fiction</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>📗 Non-Fiction</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>💕 Romance</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>🚀 Science Fiction</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>🕵️‍♂️ Mystery & Thriller</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>🌱 Self-help</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>👤 Biography</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>🏛️ History</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>📝 Poetry</p>
          <input type="checkbox" />
        </div>

        {/* Academic Subject Filters */}
        <div className={styles.filter}>
          <p>➗ Mathematics</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>💻 Computer Science</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>📊 Business Studies</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>📖 Literature</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>🤔 Philosophy</p>
          <input type="checkbox" />
        </div>
        <div className={styles.filter}>
          <p>✝️ Religious Studies</p>
          <input type="checkbox" />
        </div>
      </div>

      <div className={styles.Genre}>
        <h1 className={styles.subtitle}>Fiction books</h1>
        <div className={styles.books}>
          {data && data.map(book => {
            return (
              <div className={styles.book} key={book._id} onClick={() => { setActive(true); setId(book._id) }}>
                <img src="src/assets/example.jpeg" alt="" className={styles.image} />
                <p>Book: <span className={styles.truncate} style={{ width: '90%' }} >{data && book.title}</span> </p>
                <p>Author: <span className={styles.truncate} style={{ width: '90%' }}>{data && book.author}</span></p>
                <p>Genre: <span>{data && book.genre}</span></p>
                <p>Rating: <span>{data && book.ratingsAverage}</span></p>
                <p>Price: <span>{data && book.price}</span></p>
              </div>
            )
          })}

        </div>
      </div>
      {active && <Book id={id} active={setActive} />}
    </div>
      }
    </Layout>
  );
};

export default Genre;