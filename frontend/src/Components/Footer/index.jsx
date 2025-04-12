import styles from "./index.module.css";

const Footer = () => {
  const date = new Date();
  console.log(date.getFullYear())
  const year = date.getFullYear();
  return (
    <div className={styles.container}>
      <p>&copy; {year} BookiFy. All rights reserved.</p>
    </div>
  );
};

export default Footer;