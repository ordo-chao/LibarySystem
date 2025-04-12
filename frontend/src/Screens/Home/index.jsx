import styles from './index.module.css'
import Layout from '../../Layout'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Layout>
      <div className={styles.container}>
        {/* Trending books */}
        <div className={styles.trending}>
          <h1 className={styles.heading}>Trending books 🔥</h1>
          <div className={styles.books}>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <Link to={'/trending'}><p className={styles.viewmore}>View more >></p></Link>
          </div>
        </div>

        {/* By Genre / Subject */}
        <div className={styles.trending}>
          <h1 className={styles.heading}>Books for you 📖</h1>
          <div className={styles.books}>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <Link to={'/foryou'}><p className={styles.viewmore}>View more >></p></Link>
          </div>
        </div>

        {/* On Sale / Discounted */}
        <div className={styles.trending}>
          <h1 className={styles.heading}>On Sale / Discounted 🏷️</h1>
          <div className={styles.books}>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <Link to={'/onsale'}><p className={styles.viewmore}>View more >></p></Link>
          </div>
        </div>

        {/* New Arrivals books */}
        <div className={styles.trending}>
          <h1 className={styles.heading}>New Arrivals 🆕</h1>
          <div className={styles.books}>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <Link to={'/newarrivals'}><p className={styles.viewmore}>View more >></p></Link>
          </div>
        </div>

        {/* Recommended Reads */}
        <div className={styles.trending}>
          <h1 className={styles.heading}>Recommended Reads 📌</h1>
          <div className={styles.books}>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <Link to={'/recommended'}><p className={styles.viewmore}>View more >></p></Link>
          </div>
        </div>


        {/* Books for you books */}
        <div className={styles.trending}>
          <h1 className={styles.heading}>By Genre / Subject 🧠</h1>
          <div className={styles.books}>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>
            <div className={styles.book}>
              <img src="src/assets/example.jpeg" alt="" className={styles.image} />
              <p>Book: <span>48 Laws of Power</span> </p>
              <p>Author: <span>Robert Greene</span></p>
              <p>Price: <span>$10</span></p>
              <p>Rating: <span>4.5</span></p>
              <p>Pages: <span>400</span> </p>
            </div>

            <p className={styles.viewmore}>View more >></p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home