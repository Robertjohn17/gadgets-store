import styles from "../ProductBar.module.css";
import laplogo from "../images/laplogo.jpg";
import mobilelogo from "../images/mobilelogo.jpg";
import headphone from "../images/headphonelogo.jpg";
import watch from "../images/watch.jpg";
import { Link } from "react-router-dom";

function AdminProductBar() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <Link to="/admin-lap" className={styles.link}>
            <img src={laplogo} alt="img" className={styles.img} />
            <div className={styles.text}>Laptops</div>
          </Link>
          <Link className={styles.link} to="/admin-mobile">
            <img src={mobilelogo} alt="" className={styles.img} />
            <div className={styles.text}>Mobiles</div>
          </Link>
          <Link className={styles.link} to="/admin-watch">
            <img src={watch} alt="" className={styles.img} />
            <div className={styles.text}>SmartWatch</div>
          </Link>
          <Link className={styles.link} to="/admin-headphone">
            <img src={headphone} alt="" className={styles.img} />
            <div className={styles.text}>Headphones</div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default AdminProductBar;
