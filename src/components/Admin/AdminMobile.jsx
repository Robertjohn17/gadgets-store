import { useContext, useState } from "react";
import { MyContext } from "../Context";
import styles from "./AdminLap.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import AdminProductBar from "./AdminProductBar";
import AdminNavbar from "./AdminNavbar";
import Footer from "../Footer";

function AdminMobile() {
  const { mobile, setMobile, setProductEdit } = useContext(MyContext);
  const nav = useNavigate();
  const [newProduct, setNewProduct] = useState({
    // id: Date.now(),
    Company: "",
    Name: "",
    Specification: "",
    Price: 0,
    image: null,
  });

  const handleEdit = (product) => {
    setProductEdit(product);
    nav("/edit-product-mobile", { state: { productedit: product } });
  };

  const handleDelete = (product) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${product.Name}?`
    );

    if (confirmed) {
      const updatedMobile = mobile.filter((p) => p.Name !== product.Name);
      setMobile(updatedMobile);
    }
  };
  const handleAddProduct = () => {
    if (
      !newProduct.Company ||
      !newProduct.Name ||
      !newProduct.Specification ||
      newProduct.Price <= 0 ||
      !newProduct.image
    ) {
      alert("Please fill in all fields.");
      return;
    }
    setMobile((prevMobile) => [...prevMobile, newProduct]);
    setNewProduct({
      // id: Date.now(),
      Company: "",
      Name: "",
      Specification: "",
      Price: 0,
      image: null,
    });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewProduct({ ...newProduct, image: file });
  };

  return (
    <>
      <AdminNavbar />
      <AdminProductBar />
      <h2 className={styles.addproducth}>
        <a href="#addproduct">Add new Product</a>
      </h2>
      <div className={styles.container}>
        {mobile.map((data) => (
          <div className={styles.main} key={data.Name}>
            <img
              src={
                data.image instanceof File
                  ? URL.createObjectURL(data.image)
                  : `images/${data.image}`
              }
              alt="img"
              className={styles.imag}
            />
            <div className={styles.product_details}>
              <div className={styles.company}>
                {data.Company}
                <span
                  className={styles.whishlist}
                  onClick={() => handleDelete(data)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </span>
              </div>
              <div className={styles.name}>{data.Name}</div>
              <div className={styles.specification}>{data.Specification}</div>
              <div className={styles.price}> ₹{data.Price}</div>
              <button className={styles.btn} onClick={() => handleEdit(data)}>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.container2} id="addproduct">
        <div className={styles.addProduct}>
          <p>Add Products</p>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="text"
              placeholder="Product Company"
              value={newProduct.Company}
              onChange={(e) =>
                setNewProduct({ ...newProduct, Company: e.target.value })
              }
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Product Name"
              value={newProduct.Name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, Name: e.target.value })
              }
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Product Price"
              value={newProduct.Price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, Price: e.target.value })
              }
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Product Specification"
              value={newProduct.Specification}
              onChange={(e) =>
                setNewProduct({ ...newProduct, Specification: e.target.value })
              }
            />
            <input
              className={styles.inputimage}
              type="file"
              accept="images/"
              onChange={(e) => handleImageChange(e)}
            />
            <button
              type="button"
              className={styles.addbtn}
              onClick={handleAddProduct}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AdminMobile;
