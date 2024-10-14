import { useContext, useEffect, useState } from "react";
import { MyContext } from "./Context";
import styles from "./AddCart.module.css";
import Navbar from "./Navbar";
import CartCompnt from "./CartCompnt";
import cart from "./images/cart.jpg";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

function AddCart() {
  const { addcart, setAddCart } = useContext(MyContext);
  const [cartTotal, setCartTotal] = useState(0);
  const nav = useNavigate();

  const handleClick = () => {
    setAddCart([]);
    alert("Your Order has been Placed , Thank You for Shopping");
    nav("/");
  };
  useEffect(() => {
    const calculateCartTotal = () => {
      return addcart.reduce((total, item) => {
        const quantity = item.quantity || 1;
        const price = parseFloat(item.Price) || 0;
        return total + price * quantity;
      }, 0);
    };
    setCartTotal(calculateCartTotal());
  }, [addcart]);

  console.log("Cart Product", addcart);

  return (
    <>
      <Navbar />
      <div>
        {addcart.length === 0 ? (
          <>
            <div className={styles.maincontainer}>
              <div className={styles.ifcontainer}>
                <img src={cart} alt="" className={styles.cartimg} />
                <p className={styles.p}>Missing Cart Items?</p>
                <Link to="/lap" className={styles.addProduct}>
                  Add Products
                </Link>
              </div>
            </div>
            <Footer />
          </>
        ) : (
          <>
            <div className={styles.container}>
              {addcart.map((data) => (
                // <div className={styles.main} key={data.Name}>
                //   <img
                //     src={`/images/${data.image}`}
                //     alt="img"
                //     className={styles.imag}
                //   />
                //   <div className={styles.product_details}>
                //     <div className={styles.company}>
                //       {data.Company}{" "}
                //       <span
                //         className={styles.whishlist}
                //         onClick={() => addToWhishlist(data)}
                //       >
                //         {whishlist.includes(data) ? "❤" : "🤍"}
                //       </span>
                //     </div>
                //     <div className={styles.name}>{data.Name}</div>
                //     <div className={styles.specification}>{data.Specification}</div>
                //     <div className={styles.price}> ₹{data.Price}</div>
                //     <button className={styles.btn} onClick={() => RemoveCart(data)}>
                //       Remove From Cart
                //     </button>

                //   </div>
                // </div>
                <CartCompnt product={data} />
              ))}
            </div>
            <div className={styles.cartTotalContainer}>
              <div className={styles.cartTotal}>
                <p className={styles.totalAmount}>
                  Total Amount: {parseFloat(cartTotal.toFixed(2))}/-
                </p>
                <button className={styles.order} onClick={handleClick}>
                  Place Order
                </button>
              </div>
            </div>
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
export default AddCart;
