import styles from './index.module.css'
import Layout from '../../Layout'
import { Link } from 'react-router-dom'
import Book from '../../Components/Book'
import { useState , useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
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
    fetch(`${serverIp}/guest`).then(res => res.json()).then(data => setData(data))
    setLoader(false)
  }
  return (
    <Layout>
      {loader ? <div className={styles.loader}><ClipLoader color="#FF6D00" /></div>:
      <div className={styles.container}>
      {/* Trending books */}
      <div className={styles.trending}>
        <h1 className={styles.heading}>Trending books 🔥</h1>
        <div className={styles.books}>
          {data && data.trending.map(book => {
            return (
              <div className={styles.book} key={book._id} onClick={() => {setActive(true) ; setId(book._id)}}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span className={styles.truncate} style={{width: '90%'}} >{data && book.title}</span> </p>
              <p>Author: <span>{data && book.author }</span></p>
              <p>Price: <span>KES {data && book.price}</span></p>
              <p>Rating: <span>{data && book.ratingsAverage }</span></p>
              <p>Pages: <span>{data && book.pages}</span> </p>
            </div>
          )})}

          <Link to={'/trending'}><p className={styles.viewmore}>View more &gt;&gt;</p></Link>
        </div>
      </div>

      {/* By Genre / Subject */}
      <div className={styles.trending}>
        <h1 className={styles.heading}>Books for you 📖</h1>
        <div className={styles.books}>
          {data && data.booksforyou.map(book => {
            return (
              <div className={styles.book} key={book._id}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span className={styles.truncate} style={{width: '90%'}} >{data && book.title}</span> </p>
              <p>Author: <span>{data && book.author }</span></p>
              <p>Price: <span>KES {data && book.price}</span></p>
              <p>Rating: <span>{data && book.ratingsAverage }</span></p>
              <p>Pages: <span>{data && book.pages}</span> </p>
            </div>
          )})}

          <Link to={'/foryou'}><p className={styles.viewmore}>View more &gt;&gt;</p></Link>
        </div>
      </div>

      {/* On Sale / Discounted */}
      <div className={styles.trending}>
        <h1 className={styles.heading}>On Sale / Discounted 🏷️</h1>
        <div className={styles.books}>
          {data && data.discounted.map(book => {
            return (
              <div className={styles.book} key={book._id}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span className={styles.truncate} style={{width: '90%'}} >{data && book.title}</span> </p>
              <p>Author: <span>{data && book.author }</span></p>
              <p>Price: <span>KES {data && book.discountPrice} ~ KES {data && book.price}</span></p>
              <p>Rating: <span>{data && book.ratingsAverage }</span></p>
              <p>Pages: <span>{data && book.pages}</span> </p>
            </div>
          )
          })}
          <Link to={'/onsale'}><p className={styles.viewmore}>View more &gt;&gt;</p></Link>
        </div>
      </div>

      {/* New Arrivals books */}
      <div className={styles.trending}>
        <h1 className={styles.heading}>New Arrivals 🆕</h1>
        <div className={styles.books}>
          {data && data.arrivals.map(book => {
            return (
              <div className={styles.book} key={book._id}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span className={styles.truncate} style={{width: '90%'}} >{data && book.title}</span> </p>
              <p>Author: <span>{data && book.author }</span></p>
              <p>Price: <span>KES {data && book.price}</span></p>
              <p>Rating: <span>{data && book.ratingsAverage }</span></p>
              <p>Pages: <span>{data && book.pages}</span> </p>
            </div>
          )})}

          <Link to={'/newarrivals'}><p className={styles.viewmore}>View more &gt;&gt;</p></Link>
        </div>
      </div>

      {/* Recommended Reads */}
      <div className={styles.trending}>
        <h1 className={styles.heading}>Recommended Reads 📌</h1>
        <div className={styles.books}>
          {data && data.recommended.map(book => {
            return (
              <div className={styles.book} key={book._id}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span className={styles.truncate} style={{width: '90%'}} >{data && book.title}</span> </p>
              <p>Author: <span>{data && book.author }</span></p>
              <p>Price: <span>KES {data && book.price}</span></p>
              <p>Rating: <span>{data && book.ratingsAverage }</span></p>
              <p>Pages: <span>{data && book.pages}</span> </p>
            </div>
          )})}

          <Link to={'/recommended'}><p className={styles.viewmore}>View more &gt;&gt; </p></Link>
        </div>
      </div>


      {/* Books for you books */}
      <div className={styles.trending}>
        <h1 className={styles.heading}>By Genre / Subject 🧠</h1>
        <div className={styles.books}>
          {data && data.genre.map(book => {
            return (
              <div className={styles.book} key={book._id}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span className={styles.truncate} style={{width: '90%'}} >{data && book.title}</span> </p>
              <p>Author: <span>{data && book.author }</span></p>
              <p>Price: <span>KES {data && book.price}</span></p>
              <p>Rating: <span>{data && book.ratingsAverage }</span></p>
              <p>Pages: <span>{data && book.pages}</span> </p>
            </div>
          )})}

          <Link to={'/genre'}><p className={styles.viewmore}>View more &gt;&gt;</p></Link>
        </div>
      </div>
      {active && <Book active={setActive} id={id} />}
    </div>}
    </Layout>
  )
}

export default Home