import styles from "./UserRegister.module.css";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "./Context";
import Footer from "./Footer";

function UserLogin() {
  const { user, setLogUser, setLogAdmin } = useContext(MyContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginerror, setLoginError] = useState("");
  const nav = useNavigate();

  const handleLogin = () => {
    const adminData = { username: "admin", password: "adminpas" };
    const isAdmin =
      username === adminData.username && password === adminData.password;
    if (isAdmin) {
      setLogAdmin(adminData);
      alert("Admin login successful!");
      nav("/admin-dashboard");
      return;
    }

    const loggedUser = user.find(
      (userData) =>
        userData.username === username && userData.password === password
    );
    if (loggedUser) {
      if (loggedUser.isBanned) {
        setLoginError("Admin has banned you. Contact support for assistance.");
      } else {
        setLogUser(loggedUser);
        alert("Login successful!");
        nav("/");
      }
    } else {
      setLoginError("Invalid username or password. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>Login</div>
          {loginerror && <div className={styles.error}>{loginerror}</div>}
          <div className={styles.inputContainer}>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            <input
              type="text"
              placeholder="Username"
              value={username}
              className={styles.input}
              onChange={(e) => {
                setUsername(e.target.value);
                setLoginError("");
              }}
            />
          </div>
          <div className={styles.inputContainer}>
            <FontAwesomeIcon icon={faLock} className={styles.icon} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              className={styles.input}
              onChange={(e) => {
                setPassword(e.target.value);
                setLoginError("");
              }}
            />
          </div>
          <button className={styles.btn} onClick={() => handleLogin()}>
            Login
          </button>
          <div className={styles.text}>
            Not a Member ?{" "}
            <Link className={styles.link} to="/register">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default UserLogin;
