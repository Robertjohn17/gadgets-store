import styles from "./Whishlist.module.css";
import { useContext } from "react";
import { MyContext } from "./Context";
import Navbar from "./Navbar";
import cart from "./images/cart.jpg";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";

function Whishlist() {
  const { whishlist, setWhishlist, addcart, setAddCart,} =
    useContext(MyContext);
  const nav = useNavigate();

  function RemoveWhishlist(product) {
    setWhishlist(whishlist.filter((headphone) => headphone !== product));
  }
  const addToCart = (product) => {
      const existingProduct = addcart.find(
        (item) => item.Name === product.Name
      );
      if (existingProduct) {
        nav("/cart");
      } else {
        setAddCart([...addcart, { ...product, quantity: 1 }]);
      }
  }; 

  return (
    <>
      <Navbar />
      <>
        {whishlist.length === 0 ? (
          <>
            <div className={styles.maincontainer}>
              <div className={styles.ifcontainer}>
                <img src={cart} alt="" className={styles.cartimg} />
                <p className={styles.p}>No Wishlists</p>
                <Link to="/lap" className={styles.addProduct}>
                  Add Wishlist
                </Link>
              </div>
            </div>
            <Footer />
          </>
        ) : (
          <div className={styles.container}>
            {whishlist.map((data) => (
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
                      onClick={() => RemoveWhishlist(data)}
                    >
                      ❤
                    </span>
                  </div>
                  <div className={styles.name}>{data.Name}</div>
                  <div className={styles.specification}>
                    {data.Specification}
                  </div>
                  <div className={styles.price}> ₹{data.Price}</div>
                  <button
                    className={styles.btn}
                    onClick={() => addToCart(data)}
                  >
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
            <Footer />
          </div>
        )}
      </>
    </>
  );
}
export default Whishlist;
