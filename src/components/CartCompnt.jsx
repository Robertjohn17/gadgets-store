import { useContext } from "react";
import styles from "./AddCart.module.css";
import { MyContext } from "./Context";

function CartCompnt({ product }) {
  const { addcart, setAddCart } = useContext(MyContext);

  console.log("new", product);


  const handleRemove = (product) => {
    const updateCart = addcart.filter((item) => item.Name !== product.Name);
    setAddCart(updateCart);
  };
  const handleQuantityChange = (product, newQuantity) => {
    const updateCart = addcart.map((item) =>
      item.Name === product.Name ? { ...item, quantity: newQuantity } : item
    );
    setAddCart(updateCart);
  };
  return (
    <>
      <div className={styles.main} key={product.Name}>
        <img
          src={`/images/${product.image}`}
          alt="img"
          className={styles.imag}
        />
        <div className={styles.product_details}>
          <div className={styles.company}>
            {product.Company}{" "}
            {/* <span
                  className={styles.whishlist}
                  onClick={() => addToWhishlist(data)}
                >
                  {whishlist.includes(data) ? "❤" : "🤍"} 
                </span> */}
          </div>
          <div className={styles.name}>{product.Name}</div>
          <div className={styles.specification}>{product.Specification}</div>
          <div className={styles.price}> ₹{parseFloat(product.Price)}</div>
          <div className={styles.quantity}>
            Quantity:
            <button
              className={styles.btn}
              onClick={() =>
                handleQuantityChange(product, (product.quantity || 1) + 1)
              }
            >
              +
            </button>
            <div className={styles.dispQuantity}>{product.quantity || 1}</div>
            <button
              className={styles.btn}
              onClick={() =>
                handleQuantityChange(
                  product,
                  Math.max(1, (product.quantity || 1) - 1)
                )
              }
            >
              -
            </button>
          </div>
          <div className={styles.bottom}>
            <h5 className={styles.total}>
              Total: {parseFloat(product.Price || 0) * (product.quantity || 1)}
              /-
            </h5>
            <div className={styles.remove}>
              <button
                className={styles.btnRemove}
                onClick={() => handleRemove(product)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartCompnt;
