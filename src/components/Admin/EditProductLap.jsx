import React, { useContext, useState, useEffect, useMemo } from "react";
import { MyContext } from "../Context";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./EditProduct.module.css";
import Footer from "../Footer";

function EditProductLap() {
 const { lap,setLap} = useContext(MyContext);
 const location = useLocation();
 const nav = useNavigate();

 const productedit = useMemo(
   () => location.state?.productedit || {},
   [location.state]
 );

 const [editedProduct, setEditedProduct] = useState({
   Name: "",
   Price: 0,
   Specification: "",
   Company: "",
 });

 useEffect(() => {
   setEditedProduct(productedit);
 }, [productedit]);

 const handleChange = (e) => {
   const { name, value } = e.target;
   setEditedProduct((prevProduct) => ({
     ...prevProduct,
     [name]: value,
   }));
 };

 const handleSubmit = (e) => {
   e.preventDefault();

   const updatedLap = lap.map((product) =>
     product.Name === productedit.Name ? editedProduct : product
   );

   setLap(updatedLap);
   nav("/admin-lap");
 };

 return (
   <>
     <h2 className={styles.h2}>Edit Product</h2>
     <div className={styles.container}>
       <div className={styles.main}>
         <form onSubmit={handleSubmit} className={styles.form}>
           <label className={styles.label}>
             Company:
             <input
               className={styles.input}
               type="text"
               name="Company"
               value={editedProduct.Company}
               onChange={handleChange}
             />
           </label>
           <br />
           <label className={styles.label}>
             Name:
             <input
               className={styles.input}
               type="text"
               name="Name"
               value={editedProduct.Name}
               onChange={handleChange}
             />
           </label>
           <br />
           <label className={styles.label}>
             Price:
             <input
               className={styles.input}
               type="number"
               name="Price"
               value={editedProduct.Price}
               onChange={handleChange}
             />
           </label>
           <br />
           <label className={styles.label}>
             Specification:
             <textarea
               className={styles.textarea}
               name="Specification"
               value={editedProduct.Specification}
               onChange={handleChange}
             />
           </label>
           <br />
           <button type="submit" className={styles.btn}>
             Save Changes
           </button>
         </form>
       </div>
     </div>
     <Footer/>
   </>
 );
}

export default EditProductLap;
