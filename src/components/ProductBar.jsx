import styles from "./ProductBar.module.css";
import laplogo from "./images/laplogo.jpg";
import mobilelogo from "./images/mobilelogo.jpg";
import headphone from "./images/headphonelogo.jpg";
import watch from "./images/watch.jpg";
import { Link } from "react-router-dom";

function ProductBar() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <Link to="/lap" className={styles.link}>
            <img src={laplogo} alt="img" className={styles.img} />
            <div className={styles.text}>Laptops</div>
          </Link>
          <Link className={styles.link} to="/mobile">
            <img src={mobilelogo} alt="" className={styles.img} />
            <div className={styles.text}>Mobiles</div>
          </Link>
          <Link className={styles.link} to="/watch">
            <img src={watch} alt="" className={styles.img} />
            <div className={styles.text}>SmartWatch</div>
          </Link>
          <Link className={styles.link} to="/headphone">
            <img src={headphone} alt="" className={styles.img} />
            <div className={styles.text}>Headphones</div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default ProductBar;
