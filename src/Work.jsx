import React from "react";
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
  { image: RoundNeck_Blue, name: "T-Shirts", link: "t-shirt.html" },
  { image: Hoodie1, name: "Hoodies", link: "hoodies.html" },
  { image: Mug1, name: "Mugs", link: "mug.html" },
  { image: Leather1, name: "Leather Combos", link: "leather_product.html" },
  { image: Pen1, name: "Pens", link: "pen.html" },
  { image: "/Screen_Square/images/combo.jpg", name: "Combos", link: "combo.html" },
  { image: Plate1, name: "PavBhaji Plates", link: "steel_plate.html" },
  { image: Cap1, name: "Caps", link: "hat.html" },
  { image: PhoneStand1, name: "Mobile Stands", link: "phone_stand.html" },
  { image: FlaskSet1, name: "Vacuum Flask Sets", link: "vacuum_flaskset.html" },
  { image: Pillow1, name: "Pillows", link: "pillow.html" },
  { image: Tiffin1, name: "Tiffins", link: "tiffin.html" },
  { image: Pouch1, name: "Pouches", link: "pouch.html" },
  { image: CardHolder1, name: "Card holders", link: "card_holder.html" },
  { image: Apron1, name: "Aprons", link: "apron-product.html" },
  { image: Keychain1, name: "Keychains", link: "keychain.html" },
  { image: Shirt1, name: "Shirts", link: "shirt.html" },
  { image: Labcoat1, name: "Lab Coats", link: "coat.html" },
  { image: Wallet1, name: "Wallets", link: "wallet-product.html" },
  { image: Bottle1, name: "Bottles", link: "bottle.html" },
];

const Products = () => {
  return (
    <div className="product">
      <div className="product_title">
        <h1 className="title">Exclusive Gift Collections</h1>
        <p>
          Discover the perfect gift for every occasion in our carefully curated
          collections. From executive essentials to personal comforts, <br />
          we have something for everyone.
        </p>
      </div>

      <div className="categories">
        {products.map((product, index) => (
          <div
            className="category-item"
            key={index}
            onClick={() => (window.location.href = product.link)}
          >
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
