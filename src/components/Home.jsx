import React from "react";
import styles from "./Home.module.css";
import { Carousel } from "react-bootstrap";
import banner1 from "./images/lapnewbanner.jpg";
import banner2 from "./images/headphonenewbanner.jpg";
import banner3 from "./images/watchnewbanner.jpg";
import banner4 from "./images/mobilenewbanner.jpg";
import Navbar from "./Navbar";
import ProductBar from "./ProductBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <ProductBar />
      <div className={styles.container}>
        <Carousel>
          <Carousel.Item>
            <img
              src={banner1}
              className={`${styles.carouselImage} d-block w-100`}
              alt="img"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={banner4}
              className={`${styles.carouselImage} d-block w-100`}
              alt="img"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={banner2}
              className={`${styles.carouselImage} d-block w-100`}
              alt="img"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={banner3}
              className={`${styles.carouselImage} d-block w-100`}
              alt="img"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={styles.body}>
        <div className={styles.box}>
          <div className={styles.imgContainer}>
            <img
              src={require("./images/vivov29.jpg")}
              className={styles.boxImage}
              alt="img"
            />
          </div>
          <div className={styles.boxContent}>
            <h2>Vivo V29(12|128GB)</h2>
            <p className={styles.price}>JUST ₹19990</p>
            <Link className={styles.shop} to="/mobile">
              Shop Now{" "}
            </Link>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.imgContainer}>
            <img
              src={require("./images/oneplus-11.jpg")}
              className={styles.boxImage}
              alt="img"
            />
          </div>
          <div className={styles.boxContent}>
            <h2>OnePlus 11(8|256GB)</h2>
            <p className={styles.price}>JUST ₹49990</p>
            <Link className={styles.shop} to="/mobile">
              Shop Now{" "}
            </Link>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.imgContainer}>
            <img
              src={require("./images/Applecool.jpeg")}
              className={styles.boxImage}
              alt="img"
            />
          </div>
          <div className={styles.boxContent}>
            <h2>Apple Coolfit</h2>
            <p className={styles.price}>JUST ₹1990</p>
            <Link className={styles.shop} to="/watch">
              Shop Now{" "}
            </Link>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.imgContainer}>
            <img
              src={require("./images/acer.jpg")}
              className={styles.boxImage}
              alt="img"
            />
          </div>
          <div className={styles.boxContent}>
            <h2>Acer Aspire 3</h2>
            <p className={styles.price}>JUST ₹29990</p>
            <Link className={styles.shop} to="/lap">
              Shop Now{" "}
            </Link>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.imgContainer}>
            <img
              src={require("./images/Boat-Airpode.jpeg")}
              className={styles.boxImage}
              alt="img"
            />
          </div>
          <div className={styles.boxContent}>
            <h2>Boat Airpod Max</h2>
            <p className={styles.price}>JUST ₹1490</p>
            <Link className={styles.shop} to="/headphone">
              Shop Now{" "}
            </Link>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.imgContainer}>
            <img
              src={require("./images/iphone13.jpg")}
              className={styles.boxImage}
              alt="img"
            />
          </div>
          <div className={styles.boxContent}>
            <h2>iPhone 13</h2>
            <p className={styles.price}>JUST ₹69990</p>
            <Link className={styles.shop} to="/mobile">
              Shop Now{" "}
            </Link>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.imgContainer}>
            <img
              src={require("./images/Boatwave.jpeg")}
              className={styles.boxImage}
              alt="img"
            />
          </div>
          <div className={styles.boxContent}>
            <h2>Boat Wave 3</h2>
            <p className={styles.price}>JUST ₹4990</p>
            <Link className={styles.shop} to="/watch">
              Shop Now{" "}
            </Link>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.imgContainer}>
            <img
              src={require("./images/asus.jpg")}
              className={styles.boxImage}
              alt="img"
            />
          </div>
          <div className={styles.boxContent}>
            <h2>ASUS Vivobook Go</h2>
            <p className={styles.price}>JUST ₹50990</p>
            <Link className={styles.shop} to="/lap">
              Shop Now{" "}
            </Link>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.imgContainer}>
            <img
              src={require("./images/Boat-Headphone 450.jpeg")}
              className={styles.boxImage}
              alt="img"
            />
          </div>
          <div className={styles.boxContent}>
            <h2>Boat HeadPhone 450</h2>
            <p className={styles.price}>JUST ₹4990</p>
            <Link className={styles.shop} to="/headphone">
              Shop Now{" "}
            </Link>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.imgContainer}>
            <img
              src={require("./images/BoatVertex.jpeg")}
              className={styles.boxImage}
              alt="img"
            />
          </div>
          <div className={styles.boxContent}>
            <h2>Boat Vertex</h2>
            <p className={styles.price}>JUST ₹5990</p>
            <Link className={styles.shop} to="/watch">
              Shop Now{" "}
            </Link>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.imgContainer}>
            <img
              src={require("./images/iphone14.jpg")}
              className={styles.boxImage}
              alt="img"
            />
          </div>
          <div className={styles.boxContent}>
            <h2>iPhone 14</h2>
            <p className={styles.price}>JUST ₹95990</p>
            <Link className={styles.shop} to="/mobile">
              Shop Now{" "}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
