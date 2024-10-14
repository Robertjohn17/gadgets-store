import styles from "./Headphone.module.css";
import { useContext } from "react";
import { MyContext } from "./Context";
import Navbar from "./Navbar";
import ProductBar from "./ProductBar";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Headphone() {
  const { headphone, whishlist, setWhishlist, addcart, setAddCart, loguser } =
    useContext(MyContext);
  const nav = useNavigate();

  const addToWhishlist = (product) => {
    if (loguser && Object.keys(loguser).length > 0) {
      if (whishlist.includes(product)) {
        setWhishlist(whishlist.filter((headphone) => headphone !== product));
      } else {
        setWhishlist([...whishlist, product]);
      }
    } else {
      alert("Please login to add items to the wishlist.");
      nav("/login");
    }
  };

  const addToCart = (product) => {
    console.log("loguser in Cart", loguser);
    if (loguser && Object.keys(loguser).length > 0) {
      const existingProduct = addcart.find(
        (item) => item.Name === product.Name
      );
      if (existingProduct) {
        nav("/cart");
      } else {
        setAddCart([...addcart, { ...product, quantity: 1 }]);
      }
    } else {
      alert("Please login to add items to the cart.");
      nav("/login");
    }
  }; 

  return (
    <>
      <Navbar />
      <ProductBar />
      <div className={styles.container}>
        {headphone.map((data) => (
          <div className={styles.main} key={data.Name}>
            <img
              src={`/images/${data.image}`}
              alt="img"
              className={styles.imag}
            />
            <div className={styles.product_details}>
              <div className={styles.company}>
                {data.Company}{" "}
                <span
                  className={styles.whishlist}
                  onClick={() => addToWhishlist(data)}
                >
                  {whishlist.includes(data) ? "❤" : "🤍"}
                </span>
              </div>
              <div className={styles.name}>{data.Name}</div>
              <div className={styles.specification}>{data.Specification}</div>
              <div className={styles.price}> ₹{data.Price}</div>
              <button className={styles.btn} onClick={() => addToCart(data)}>
                {addcart.some((item) => item.Name === data.Name) ? (
                  <Link to="/cart" className={styles.gotocart}>
                    Go to Cart
                  </Link>
                ) : (
                  "Add to Cart"
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
export default Headphone;
