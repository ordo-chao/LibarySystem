import styles from "./index.module.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;