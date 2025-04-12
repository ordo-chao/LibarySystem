import styles from "./index.module.css";
import Layout from "../../Layout";

const Genre = () => {
  return (
    <Layout>
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

export default Genre;