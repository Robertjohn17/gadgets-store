import styles from "./UserRegister.module.css";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "./Context";
import Footer from "./Footer";

function UserRegister() {
  const { user, setUser } = useContext(MyContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [userreg,setUserReg] = useState("")

  const nav = useNavigate();

  const isUserAlreadyRegistered = () => {
    return user.find((userData) => userData.username === username);
  };

  const handleButton = () => {
    if (username.length===0) {
      setUsernameError("Username cannot be empty");
      return;
    }

    if (isUserAlreadyRegistered()) {
      setUserReg("User Already Registered.Please use a different username");
      return;
    }

    if (password.length < 6 || password.length === 0) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    const userData = { username, password };
    setUser([...user, userData]);
    console.log("Hello", userData);
    nav("/login");
  };

  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>SignUp</div>
          {userreg && <div className={styles.error}>{userreg}</div>}
          <div className={styles.inputContainer}>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            <input
              type="text"
              placeholder="Username"
              value={username}
              className={styles.input}
              onChange={(e) => {
                setUsername(e.target.value);
                setUsernameError("");
                setUserReg("");
              }}
            />
          </div>
          {usernameError && <div className={styles.error}>{usernameError}</div>}
          <div className={styles.inputContainer}>
            <FontAwesomeIcon icon={faLock} className={styles.icon} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              className={styles.input}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
                setUserReg("");
              }}
            />
          </div>
          {passwordError && <div className={styles.error}>{passwordError}</div>}
          <button className={styles.btn} onClick={() => handleButton()}>
            Create Account
          </button>
          <div className={styles.text}>
            Already a member ?{" "}
            <Link className={styles.link} to="/login">
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default UserRegister;
