import Layout from "../../Layout";
import styles from "./index.module.css";

const Search = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <form className={styles.form}>
          <input type="text" placeholder=" Search by title, author, ISBN..." />
          <button type="submit">Search 🔎</button>
        </form>
       <div className={styles.content}>
       <div className={styles.filterscontainer}>
          <h2>Filters</h2>
          <div className={styles.filters}>
            <h3 className={styles.filterheader}>Timeframe:</h3>
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
          </div>
          <div className={styles.filters}>
            <h3 className={styles.filterheader}>Genre:</h3>
            <div className={styles.filter}>
            <p>📘 Fiction</p>
              <input type="checkbox" />
            </div>
            <div className={styles.filter}>
            <p>📗 Non-Fiction</p>
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
          </div>
          <div className={styles.filters}>
            <h3 className={styles.filterheader}>Subject:</h3>
            <div className={styles.filter}>
            <p>➗ Mathematics</p>
              <input type="checkbox" />
            </div>
            <div className={styles.filter}>
            <p>💻 Computer Science</p>
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
          <div className={styles.filters}>
            <h3 className={styles.filterheader}>Price:</h3>
            <div className={styles.filter}>
              <input type="radio" />
              <p>&lt; 500</p>
            </div>
            <div className={styles.filter}>
              <input type="radio" />
              <p>500-1000</p>
            </div>
            <div className={styles.filter}>
              <input type="radio" />
              <p>&gt; 1000</p>
            </div>
          </div>
          <div className={styles.filters}>
            <h3 className={styles.filterheader}>Ratings:</h3>
            <div className={styles.filter}>
              <p>⭐️ 5</p>
              <input type="checkbox" />
            </div>
            <div className={styles.filter}>
              <p>⭐️ 4+</p>
              <input type="checkbox" />
            </div>
            <div className={styles.filter}>
              <p>⭐️ 3+</p>
              <input type="checkbox" />
            </div>
            <div className={styles.filter}>
              <p>⭐️ 2+</p>
              <input type="checkbox" />
            </div>
            <div className={styles.filter}>
              <p>⭐️ 1+</p>
              <input type="checkbox" />
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
         <div className={styles.books}>
          <p className={styles.subtitle}>📚 Search Results for "Mystery" (12 results): </p>
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

export default Search;