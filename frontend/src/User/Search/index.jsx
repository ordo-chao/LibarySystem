import Layout from "../../Layout";
import styles from "./index.module.css";
import { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import Book from '../../Components/Book'

const Search = () => {
  const [active, setActive] = useState(false)
  const serverIp = 'http://localhost:5000'
  const [data, setData] = useState()
  const [loader, setLoader] = useState(false)
  const [id, setId] = useState("")
  const [search, setSearch] = useState("")
  const [timeFrame, setTimeFrame] = useState("")
  const [rating, setRating] = useState("")
  const [genre, setGenre] = useState("")
  const [price, setPrice] = useState("")

  useEffect(() => {
    SearchData()
    filterData()
  }, [rating, genre, price])
  function SearchData() {
    setLoader(true)
    fetch(`${serverIp}/search`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ search: search })
      }).then(res => res.json()).then(data => {setData(data) ; console.log(data) }).catch(err => console.log(err)).finally(() => setLoader(false))
  }

  function filterData() {
    setLoader(true)
    fetch(`${serverIp}/search/filter`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            // "timeFrame": "2024",
            rating: rating,
            genre: genre,
            price: price
          }
      )}).then(res => res.json()).then(data => {setData(data) ; console.log(data) }).catch(err => console.log(err)).finally(() => setLoader(false))
  }
  return (
    <Layout>
      {loader ? <div className={styles.loader}><ClipLoader color="#FF6D00" /></div> :
      <div className={styles.container}>
      <form className={styles.form} action="">
        <input type="text" placeholder=" Search by title, author, ISBN..." onChange={(e) => {setSearch(e.target.value) }} />
        <button type="submit" onClick={(e) => { e.preventDefault(); SearchData() }}>Search 🔎</button>
      </form>
      <div className={styles.content}>
        <div className={styles.filterscontainer}>
          <h2>Filters</h2>
          <div className={styles.filters}>
            <h3 className={styles.filterheader}>Timeframe:</h3>
            <div className={styles.filter}>
              <p>⏱️ This Week</p>
              <input type="radio" value={"2023"} onChange={(e) => {setTimeFrame(e.target.value) }} />
            </div>
            <div className={styles.filter}>
              <p>🗓️ This Month</p>
              <input type="radio" value={"2024"} onChange={(e) => {setTimeFrame(e.target.value) }} />
            </div>
            <div className={styles.filter}>
              <p>📅 All Time</p>
              <input type="radio" value={"2025"} onChange={(e) => {setTimeFrame(e.target.value) }} />
            </div>
          </div>
          <div className={styles.filters}>
            <h3 className={styles.filterheader}>Genre:</h3>
            <div className={styles.filter}>
              <p>📘 Fiction</p>
              <input type="radio" name="genre" value={"Fiction"} onChange={(e) => {setGenre(e.target.value) }} />
            </div>
            <div className={styles.filter}>
              <p>📗 Non-Fiction</p>
              <input type="radio" name="genre" value={"Non-Fiction"} onChange={(e) => {setGenre(e.target.value) }} />
            </div>
            <div className={styles.filter}>
              <p>🕵️‍♂️ Mystery & Thriller</p>
              <input type="radio" name="genre" value={"Mystery"} onChange={(e) => {setGenre(e.target.value) }} />
            </div>
            <div className={styles.filter}>
              <p>🌱 Self-help</p>
              <input type="radio" name="genre" value={"Self-help"} onChange={(e) => {setGenre(e.target.value) }} />
            </div>
            <div className={styles.filter}>
              <p>👤 Biography</p>
              <input type="radio" name="genre" value={"Biography"} onChange={(e) => {setGenre(e.target.value) }} />
            </div>
            <div className={styles.filter}>
              <p>🏛️ History</p>
              <input type="radio" name="genre" value={"History"} onChange={(e) => {setGenre(e.target.value) }} />
            </div>
            <div className={styles.filter}>
              <p>📝 Poetry</p>
              <input type="radio" name="genre" value={"Poetry"} onChange={(e) => {setGenre(e.target.value) }} />
            </div>
          </div>
          <div className={styles.filters}>
            <h3 className={styles.filterheader}>Subject:</h3>
            <div className={styles.filter}>
              <p>➗ Mathematics</p>
              <input type="radio" name="genre" value={"Mathematics"} onChange={(e) => {setGenre(e.target.value) }} />
            </div>
            <div className={styles.filter}>
              <p>💻 Computer Science</p>
              <input type="radio" name="genre" value={"Computer Science"} onChange={(e) => {setGenre(e.target.value) }} />
            </div>
            <div className={styles.filter}>
              <p>📖 Literature</p>
              <input type="radio" name="genre" value={"Literature"} onChange={(e) => {setGenre(e.target.value) }} />
            </div>
            <div className={styles.filter}>
              <p>🤔 Philosophy</p>
              <input type="radio" name="genre" value={"Philosophy"} onChange={(e) => {setGenre(e.target.value) }} />
            </div>
            <div className={styles.filter}>
              <p>✝️ Religious Studies</p>
              <input type="radio" name="genre" value={"Religious Studies"} onChange={(e) => {setGenre(e.target.value) }} />
            </div>
          </div>
          <div className={styles.filters}>
            <h3 className={styles.filterheader}>Price:</h3>
            <div className={styles.filter}>
              <input type="radio" name="price" value={500} onChange={(e) => {setPrice(e.target.value) }}  />
              <p>&lt; 500</p>
            </div>
            <div className={styles.filter}>
              <input type="radio" name="price" value={1000} onChange={(e) => {setPrice(e.target.value) }} />
              <p>500-1000</p>
            </div>
            <div className={styles.filter}>
              <input type="radio" name="price" value={2000} onChange={(e) => {setPrice(e.target.value) }} />
              <p>&gt; 1000</p>
            </div>
          </div>
          <div className={styles.filters}>
            <h3 className={styles.filterheader}>Ratings:</h3>
            <div className={styles.filter}>
              <p>⭐️ 5</p>
              <input type="radio" name="rating" value={5} onChange={(e) => {setRating(e.target.value) }} />
            </div>
            <div className={styles.filter}>
              <p>⭐️ 4+</p>
              <input type="radio" name="rating" value={4} onChange={(e) => {setRating(e.target.value) }}  />
            </div>
            <div className={styles.filter}>
              <p>⭐️ 3+</p>
              <input type="radio" name="rating" value={3} onChange={(e) => {setRating(e.target.value) }} />
            </div>
            <div className={styles.filter}>
              <p>⭐️ 2+</p>
              <input type="radio" name="rating" value={2} onChange={(e) => {setRating(e.target.value) }} />
            </div>
            <div className={styles.filter}>
              <p>⭐️ 1+</p>
              <input type="radio" name="rating" value={1} onChange={(e) => {setRating(e.target.value) }} />
            </div>
          </div>

          <div className={styles.select}>
            <h3 className={styles.filterheader}>Sort By:</h3>
            <select className={styles.selectfilter}>
              <option value="relevance">Popularity</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="rating">Rating</option>
              <option value="price">Price</option>
            </select>
          </div>
          <div className={styles.recent}>
            <h3 >📈 Recently Viewed Books  </h3>
            <p>48 Laws of Power</p>
            <p>Inferno</p>
            <p>The Alchemist</p>
          </div>
        </div>
        <div className={styles.results}>
        <p className={styles.subtitle}>📚 Search Results for "Mystery" ({data && data.length} results): </p>
        <div className={styles.books}>
          {data && data.map(book => {
            return (
              <div className={styles.book} key={book._id} onClick={() => { setActive(true); setId(book._id) }}>
                <img src={`${serverIp}/${data && book.coverImage}`} alt="" className={styles.image} />
                <p>Book: <span>{book.title}</span> </p>
                <p>Author: <span>{book.author}</span></p>
                <p>ISBN: <span>{book.isbn}</span></p>
                <p>Price: <span>{book.price}</span></p>
                <p>Rating: <span>{book.rating}</span></p>
                <p>Pages: <span>{book.pages}</span></p>
              </div>
            )
          })}
        </div>
        </div>
      </div>
      {active && <Book active={setActive} id={id} />}
    </div>}
    </Layout>
  );
};

export default Search;