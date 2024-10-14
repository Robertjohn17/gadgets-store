import styles from "./AdminNavbar.module.css";
import logo from "../images/logo.jpg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MyContext } from "../Context";

function AdminNavbar() {
  const { logout } = useContext(MyContext);
  const nav = useNavigate();
  const location = useLocation();

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
          {location.pathname === "/users" ? (
            <Link className={styles.text} to="/admin-dashboard">
              Dashboard
            </Link>
          ) : (
            <>
              <FontAwesomeIcon icon={faUser} />
              <Link className={styles.text} to="/users">
                Users
              </Link>
            </>
          )}
        </div>
        <div className={styles.heading}>
          <span className={styles.text} onClick={handleLogout}>
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}
export default AdminNavbar;
