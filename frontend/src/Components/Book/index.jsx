import styles from "./index.module.css"
import PropTypes from 'prop-types';

const Book = (props) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <p className={styles.remove} onClick={() => props.active(false)}>❌</p>
        <div className={styles.book}>
          <img src="src/assets/example.jpeg" alt="" className={styles.img} />
          <div className={styles.details}>
            <p>Title: <span>The Alchemist</span> </p>
            <p>Author: <span>Paulo Coelho</span></p>
            <p>Published: <span>1988</span></p>
            <p>Genre: <span>Fiction, Inspirational, Spiritual</span></p>
            <p>Price: <span>KES 600</span> </p>
            <p>Available: <span>In stock</span></p>
            {/* <br/> */}
            <p>Description: <span>The Alchemist is a timeless, philosophical novel that follows the journey of Santiago, a young Andalusian shepherd boy who dreams of discovering a treasure hidden in the Egyptian pyramids. Guided by a recurring dream, Santiago sets off on an adventurous quest that spans continents and cultures, encountering gypsies, kings, thieves, desert tribes, and a mysterious alchemist along the way.

              At its core, The Alchemist is more than a story of physical travel — it’s a tale of spiritual awakening and self-discovery. The novel explores the concept of a "Personal Legend" — the unique purpose or destiny each person is meant to fulfill. Through metaphors, allegories, and rich symbolism, Coelho crafts a narrative that encourages readers to listen to their hearts, follow their dreams, and trust the universe.

              Despite the obstacles Santiago faces — fear, doubt, love, and danger — he learns that the real treasure lies not in gold, but in the wisdom, strength, and faith developed along the journey.</span></p>
          </div>
        </div>
                <div className={styles.links}>
                  <label>❤️ Add to Wishlist</label>
                  <hr className={styles.divider} />
                  <label>🛒 Add to Cart</label>
                </div>
        <hr />
        <h2 className={styles.header}>📣 Reviews  </h2>
        <div className={styles.reviews}>
          <div className={styles.review}>
            <h2>⭐⭐⭐⭐☆ by Mary:</h2>
            <p>“Beautiful and philosophical. I keep coming back to it.”</p>
            <p className={styles.rate}>Rate the review ☆☆☆☆☆ </p>
          </div>
          <div className={styles.review}>
            <h2>⭐⭐⭐⭐☆ by Mary:</h2>
            <p>“Beautiful and philosophical. I keep coming back to it.”</p>
            <p className={styles.rate}>Rate the review ☆☆☆☆☆ </p>
          </div>
          <div className={styles.review}>
            <h2>⭐⭐⭐⭐☆ by Mary:</h2>
            <p>“Beautiful and philosophical. I keep coming back to it.”</p>
            <p className={styles.rate}>Rate the review ☆☆☆☆☆ </p>
          </div>
        </div>
      </div>
    </div>
  )
}

Book.PropTypes =
{
  active: PropTypes.func,
}

export default Book;