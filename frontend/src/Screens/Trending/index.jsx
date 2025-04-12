import styles from "./index.module.css";
import Layout from "../../Layout";

const Trending = () => {
  return (
    <Layout>
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

            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Trending;