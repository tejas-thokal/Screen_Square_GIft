import React from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import RoundNeck_Blue from "./assets/roundneck_black.jpg";
import Hoodie1 from "./assets/Hoodie1.jpg";
import Mug1 from "./assets/Mug1.jpg";
import Leather1 from "./assets/leather1.jpg";
import Pen1 from "./assets/Pen1.jpg";
import Bottle1 from "./assets/Bottle1.jpg";
import Cap1 from "./assets/Cap1.jpg";
import CardHolder1 from "./assets/Cardholder1.jpg";
import Keychain1 from "./assets/Keychain1.jpg";
import PhoneStand1 from "./assets/PhoneStand1.jpg";
import FlaskSet1 from "./assets/FlaskSet1.jpg";
import Plate1 from "./assets/Plate1.jpg";
import Pillow1 from "./assets/Pillow1.jpg";
import Tiffin1 from "./assets/Tiffin1.jpg";
import Pouch1 from "./assets/Pouch1.jpg";
import Wallet1 from "./assets/Wallet1.jpg";
import Labcoat1 from "./assets/Labcoat1.jpg";
import Shirt1 from "./assets/Shirt1.jpg";
import Apron1 from "./assets/Apron1.jpg";

const products = [
  { image: RoundNeck_Blue, name: "T-Shirts", link: "/product/t-shirt" },
  { image: Hoodie1, name: "Hoodies", link: "/product/hoodies" },
  { image: Mug1, name: "Mugs", link: "/product/mugs" },
  { image: Leather1, name: "Leather Combos", link: "/product/leather" },
  { image: Pen1, name: "Pens", link: "/product/pen" },
  { image: Bottle1, name: "Bottles", link: "/product/bottle" },
  { image: Cap1, name: "Caps", link: "/product/cap" },
  { image: PhoneStand1, name: "Mobile Stands", link: "/product/phone-stand" },
  { image: FlaskSet1, name: "Vacuum Flask Sets", link: "/product/flaskset" },
  { image: Pillow1, name: "Pillows", link: "/product/pillow" },
  { image: Tiffin1, name: "Tiffins", link: "/product/tiffin" },
  { image: Pouch1, name: "Pouches", link: "/product/pouch" },
  { image: CardHolder1, name: "Card holders", link: "/product/cardholder" },
  { image: Apron1, name: "Aprons", link: "/product/apron" },
  { image: Keychain1, name: "Keychains", link: "/product/keychain" },
  { image: Shirt1, name: "Shirts", link: "/product/shirt" },
  { image: Labcoat1, name: "Lab Coats", link: "/product/labcoat" },
  { image: Wallet1, name: "Wallets", link: "/product/wallet" },
  { image: Plate1, name: "Plates", link: "/product/plate" },
];

const Products = () => {
  return (
    <div className="product">
      <div className="product_title">
        <h1 className="title">Exclusive Gift Collections</h1>
        {/* <p>
          Discover the perfect gift for every occasion in our carefully curated
          collections. From executive essentials to personal comforts,
          we have something for everyone.
        </p> */}
      </div>

      <div className="categories-container">
        <div className="categories">
          {products.map((product, index) => (
            <div className="category-item" key={index}>
              <Link to={product.link} className="product-link">
                <img src={product.image} alt={product.name} />
                <p className="product-name">{product.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
