import styles from "./Navbar.module.css";
import logo from "./images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHome,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MyContext } from "./Context";

function Navbar() {
  const { loguser, logout, cartItemCount } = useContext(MyContext);
  const nav = useNavigate();

  const handleLogout = () => {
    const confirmation = window.confirm("Are you sure you want to logout?");

    if (confirmation) {
      logout();
      nav("/");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <img src={logo} alt="" className={styles.logo} />
        <span className={styles.title}>Electronic Gadget Store</span>
      </div>
      <div className={styles.nav_text}>
        <div className={styles.heading}>
          <FontAwesomeIcon icon={faHome} />
          <Link className={styles.text} to={"/"}>
            Home
          </Link>
        </div>
        {loguser && Object.keys(loguser).length > 0 ? (
          <div className={styles.heading}>
            <span className={styles.text} onClick={handleLogout}>
              Logout
            </span>
          </div>
        ) : (
          <div className={styles.heading}>
            <FontAwesomeIcon icon={faUser} />
            <Link className={styles.text} to="/register">
              Sign Up
            </Link>
          </div>
        )}
        <div className={styles.heading}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <Link className={styles.text} to="/cart">
            Cart {cartItemCount > 0 && (
            <span className={styles.cartItemCount}>{cartItemCount}</span>
          )}
          </Link>
        </div>
        {loguser && Object.keys(loguser).length > 0 ? (
          <div className={styles.heading}>
            <FontAwesomeIcon icon={faHeart} />
            <Link className={styles.text} to="/whishlist">
              Wishlist
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default Navbar;
