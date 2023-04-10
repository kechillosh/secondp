import React from "react";
import "../styles/Home.css";
import Model from "../assets/favpng_fashion-model-african-american-fashion-design.png";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import f6 from "../assets/f6.png";
import F1 from "../Product img/f1.jpg";
import F2 from "../Product img/f2.jpg";
import F3 from "../Product img/f3.jpg";
import F4 from "../Product img/f4.jpg";
import F5 from "../Product img/f5.jpg";
import F6 from "../Product img/f6.jpg";
import F7 from "../Product img/f7.jpg";
import F8 from "../Product img/f8.jpg";
import { Link } from "react-router-dom";
import { SlBag } from "react-icons/sl";
import { SlStar } from "react-icons/sl";
import { TbStarFilled } from "react-icons/tb";
import { TbStarHalfFilled } from "react-icons/tb";
import { SlBasket } from "react-icons/sl";

function Home() {
  return (
    <div className="container">
      <section className="first">
        <div className="offer">
          <h1>Welcome to our store!</h1>
          <h2>Super Offer</h2>
          <p>Get 20% off your first purchase with code OFFER20</p>
          <div className="wrapper">
            <div className="link_wrapper">
              <button>Shop Now</button>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 268.832 268.832"
                >
                  <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <img src={Model} alt="model" />
      </section>
      <section className="Feature">
        <div>
          <img src={f1} alt="f1" />
          <h3 className="a"> Free Shipping</h3>
        </div>
        <div>
          <img src={f2} alt="f2" />
          <h3 className="b"> Online Order</h3>
        </div>
        <div>
          <img src={f3} alt="f3" />
          <h3 className="c"> Save Money</h3>
        </div>
        <div>
          <img src={f4} alt="f4" />
          <h3 className="d"> Promotions</h3>
        </div>
        <div>
          <img src={f5} alt="f5" />
          <h3 className="e"> Happy Sale</h3>
        </div>
        <div>
          <img src={f6} alt="f6" />
          <h3 className="f"> 24/7 Support </h3>
        </div>
      </section>
      <section className="product_1">
        <h2> Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="product_container">
          <div className="product">
            <img src={F1} alt="" />
            <div className="des">
              <span>adidas</span>
              <h3>Aloha Shirt</h3>

              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarFilled />
              </i>
              <i className="star">
                <TbStarHalfFilled />
              </i>

              <h3>$78</h3>
            </div>
            <Link className="navLink" to="/Cart">
              <SlBasket className="bag" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
