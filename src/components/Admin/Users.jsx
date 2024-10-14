import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../Context";
import styles from "./Users.module.css";
import AdminNavbar from "./AdminNavbar";
import AdminProductBar from "./AdminProductBar";
import Footer from "../Footer";

function Users() {
  const { user, setUser } = useContext(MyContext);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    console.log("Users:", user);
  }, [user]);

  const banUser = () => {
    if (selectedUser) {
      const confirmation = window.confirm(
        `Are you sure you want to ban ${selectedUser.username}?`
      );
      if (confirmation) {
        const updatedUsers = user.map((currentUser) =>
          currentUser.username === selectedUser.username
            ? { ...currentUser, isBanned: true }
            : currentUser
        );
        setUser(updatedUsers);
        setSelectedUser(null);
      }
    }
  };

  const unbanUser = () => {
    if (selectedUser) {
      const confirmation = window.confirm(
        `Are you sure you want to unban ${selectedUser.username}?`
      );

      if (confirmation) {
        const updatedUsers = user.map((currentUser) =>
          currentUser.username === selectedUser.username
            ? { ...currentUser, isBanned: false }
            : currentUser
        );
        setUser(updatedUsers);
        setSelectedUser(null);
      }
    }
  };

  return (
    <>
      <AdminNavbar />
      <AdminProductBar />
      <div className={styles.container}>
        <div className={styles.main}>
          <h2>Users List</h2>
          <ul className={styles.ul}>
            {user.map((user) => (
              <>
                <li
                  key={user.username}
                  className={styles.li}
                  onClick={() => setSelectedUser(user)}
                >
                  {user.username}
                  <span className={styles.span}>
                    {user.isBanned && "[Banned]"}
                  </span>
                </li>
              </>
            ))}
          </ul>
        </div>
        {selectedUser && (
          <div className={styles.main2}>
            <h2>Selected User</h2>
            <p>Username : {selectedUser.username}</p>
            <p>Password : {selectedUser.password}</p>
            <button className={styles.btn} onClick={banUser}>
              Ban User
            </button>
            <button className={styles.btn2} onClick={unbanUser}>
              Unban User
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Users;
