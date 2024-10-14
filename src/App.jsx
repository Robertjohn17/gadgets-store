import { useState } from "react";
import { MobileProduct } from "./components/MobileProduct";
import { MyContext } from "./components/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { WatchProduct } from "./components/WatchProduct";
import { LapProduct } from "./components/LapProduct";
import Mobile from "./components/Mobile";
import Lap from "./components/Lap";
import Watch from "./components/Watch";
import { HeadphoneProduct } from "./components/HeadphoneProduct";
import Headphone from "./components/Headphone";
import Whishlist from "./components/Whishlist";
import AddCart from "./components/AddCart";
import UserRegister from "./components/UserRegister";
import UserLogin from "./components/UserLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminLap from "./components/Admin/AdminLap";
import AdminMobile from "./components/Admin/AdminMobile";
import AdminWatch from "./components/Admin/AdminWatch";
import AdminHeadphone from "./components/Admin/AdminHeadphone";
import EditProductLap from "./components/Admin/EditProductLap";
import EditProductMobile from "./components/Admin/EditProductMobile";
import EditProductWatch from "./components/Admin/EditProductWatch";
import EditProductHeadphone from "./components/Admin/EditProductHeadphone";
import AdminNavbar from "./components/Admin/AdminNavbar"; 
import Users from "./components/Admin/Users";

function App() {
  const [mobile, setMobile] = useState(MobileProduct);
  const [watch, setWatch] = useState(WatchProduct);
  const [lap, setLap] = useState(LapProduct);
  const [headphone, setHeadphone] = useState(HeadphoneProduct);
  const [whishlist, setWhishlist] = useState([]);
  const [addcart, setAddCart] = useState([]);
  const initialUsers = [
    { id: 1, username: "Neymar", password: "neymarpas", isBanned: false },
    { id: 2, username: "Ronaldo", password: "ronaldopas", isBanned: false },
    { id: 3, username: "Messi", password: "messipas", isBanned: false },
    { id: 4, username: "Robert", password: "robertpas", isBanned: false },
  ];
  const [user, setUser] = useState(initialUsers);
  const [loguser, setLogUser] = useState({});
  const [admin, setLogAdmin] = useState(null);
  const [productedit, setProductEdit] = useState({});

  const cartItemCount = addcart.length;

  const logout = () => {
    setLogAdmin(null);
    setLogUser(null);
    setAddCart([]);
    setWhishlist([]);
  };

  const values = {
    cartItemCount,
    mobile,
    setMobile,
    watch,
    setWatch,
    lap,
    setLap,
    headphone,
    setHeadphone,
    whishlist,
    setWhishlist,
    addcart,
    setAddCart,
    user,
    setUser,
    loguser,
    setLogUser,
    logout,
    admin,
    setLogAdmin,
    productedit,
    setProductEdit,
  };

  return (
    <div className="app">
      {
        <BrowserRouter>
          <MyContext.Provider value={values}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="mobile" element={<Mobile />} />
              <Route path="lap" element={<Lap />} />
              <Route path="watch" element={<Watch />} />
              <Route path="headphone" element={<Headphone />} />
              <Route path="whishlist" element={<Whishlist />} />
              <Route path="cart" element={<AddCart />} />
              <Route path="register" element={<UserRegister />} />
              <Route path="login" element={<UserLogin />} />
              <Route path="admin-dashboard" element={<AdminDashboard />} />
              <Route path="admin-nav" element={<AdminNavbar />} />
              <Route path="admin-lap" element={<AdminLap />} />
              <Route path="admin-mobile" element={<AdminMobile />} />
              <Route path="admin-watch" element={<AdminWatch />} />
              <Route path="admin-headphone" element={<AdminHeadphone />} />
              <Route path="edit-product-lap" element={<EditProductLap />} />
              <Route
                path="edit-product-mobile"
                element={<EditProductMobile />}
              />
              <Route path="edit-product-watch" element={<EditProductWatch />} />
              <Route
                path="edit-product-headphone"
                element={<EditProductHeadphone />}
              />
              <Route path="users" element={<Users />} />
            </Routes>
          </MyContext.Provider>
        </BrowserRouter>
      }
    </div>
  );
}
export default App;
