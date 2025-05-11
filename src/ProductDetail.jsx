import React from 'react';
import { Link, useParams } from 'react-router-dom';
import "./Work.css";
import RoundNeck_Blue from "./assets/roundneck_black.jpg";
import Hoodie1 from "./assets/Hoodie1.jpg";
import Mug1 from "./assets/Mug1.jpg";
import Mug2 from "./assets/Mug2.jpg";
import Mug3 from "./assets/Mug3.jpg";
import Mug4 from "./assets/Mug5.jpg";
import Mug5 from "./assets/Mug6.jpg";
import Mug6 from "./assets/Mug7.jpg";
import Leather1 from "./assets/leather1.jpg";
import Pen1 from "./assets/Pen1.jpg";
import Bottle1 from "./assets/Bottle1.jpg";
import Cap1 from "./assets/Cap1.jpg";
import CardHolder1 from "./assets/Cardholder1.jpg";
import Keychain1 from "./assets/Keychain1.jpg";
import PhoneStand1 from "./assets/PhoneStand1.jpg";
import FlaskSet1 from "./assets/FlaskSet1.jpg";
import FlaskSet2 from "./assets/FlaskSet2.jpg";
import FlaskSet3 from "./assets/FlaskSet3.jpg";
import Plate1 from "./assets/Plate1.jpg";
import Plate2 from "./assets/Plate2.jpg";
import Plate3 from "./assets/Plate3.jpg";
import Plate4 from "./assets/Plate4.jpg";
import Plate5 from "./assets/Plate5.jpg";
import Pillow1 from "./assets/Pillow1.jpg";
import Tiffin1 from "./assets/Tiffin1.jpg";
import Pouch1 from "./assets/Pouch1.jpg";
import Wallet1 from "./assets/Wallet1.jpg";
import Labcoat1 from "./assets/Labcoat1.jpg";
import Shirt1 from "./assets/Shirt1.jpg";
import Apron1 from "./assets/Apron1.jpg";


const productDetails = {
  "t-shirt": {
    name: "T-Shirts",
    description: "A stylish T-shirt for every occasion. Soft, comfortable, and made with high-quality fabric.",
    images: [RoundNeck_Blue,RoundNeck_Blue,RoundNeck_Blue,RoundNeck_Blue,RoundNeck_Blue,RoundNeck_Blue,],
  },
  hoodies: {
    name: "Hoodies",
    description: "Stay warm and fashionable with our premium hoodies, perfect for every season.",
    images: [Hoodie1,Hoodie1,Hoodie1,Hoodie1,Hoodie1,Hoodie1],
  },
  plate: {
    name: "Plate",
    description: "Stay warm and fashionable with our premium hoodies, perfect for every season.",
    images: [Plate1,Plate2,Plate3,Plate4,Plate5,Plate3],
  },
  mugs: {
    name: "Mugs",
    description: "Perfect mugs for your morning coffee, with various designs to match your personality.",
    images: [Mug1, Mug2, Mug3, Mug4, Mug5, Mug6],
  },
  leather: {
    name: "Leather Combos",
    description: "Premium leather combos for the sophisticated you, perfect for business or casual wear.",
    images: [Leather1,Leather1,Leather1,Leather1,Leather1,Leather1,],
  },
  pen: {
    name: "Pens",
    description: "Elegant pens for professionals, made with fine materials and craftsmanship.",
    images: [Pen1, Pen1, Pen1,Pen1, Pen1, Pen1], 
  },
  bottle: {
    name: "Bottles",
    description: "Stay hydrated with our premium range of stylish bottles, perfect for your daily use.",
    images: [Bottle1, Bottle1, Bottle1,Bottle1, Bottle1, Bottle1],
  },
  cap: {
    name: "Caps",
    description: "Stylish and comfortable caps for sunny days or casual outings.",
    images: [Cap1, Cap1, Cap1,Cap1, Cap1, Cap1],
  },
  wallet: {
    name: "Wallets",
    description: "Classy wallets for both men and women, designed for functionality and style.",
    images: [Wallet1, Wallet1, Wallet1,Wallet1, Wallet1, Wallet1],
  },
  "phone-stand": {
    name: "Mobile Stands",
    description: "Convenient and sturdy mobile stands, perfect for home and office use.",
    images: [PhoneStand1, PhoneStand1, PhoneStand1,PhoneStand1, PhoneStand1, PhoneStand1],
  },
  flaskset: {
    name: "Vacuum Flask Sets",
    description: "Premium vacuum flask sets, designed to keep your beverages hot or cold for hours.",
    images: [FlaskSet1, FlaskSet2, FlaskSet3,FlaskSet1, FlaskSet2, FlaskSet3,],
  },
  pillow: {
    name: "Pillows",
    description: "Comfortable and supportive pillows, perfect for a restful night's sleep.",
    images: [Pillow1, Pillow1, Pillow1,Pillow1, Pillow1, Pillow1],
  },
  tiffin: {
    name: "Tiffins",
    description: "Practical and stylish tiffins for easy meal storage and portability.",
    images: [Tiffin1, Tiffin1, Tiffin1,Tiffin1, Tiffin1, Tiffin1],
  },
  pouch: {
    name: "Pouches",
    description: "Compact and versatile pouches for storing small items.",
    images: [Pouch1, Pouch1, Pouch1,Pouch1, Pouch1, Pouch1],
  },
  cardholder: {
    name: "Card Holders",
    description: "Sleek and secure card holders, perfect for keeping your cards organized.",
    images: [CardHolder1, CardHolder1, CardHolder1,CardHolder1, CardHolder1, CardHolder1],
  },
  apron: {
    name: "Aprons",
    description: "Durable and stylish aprons, designed for comfort while cooking or working.",
    images: [Apron1, Apron1, Apron1,Apron1, Apron1, Apron1],
  },
  keychain: {
    name: "Keychains",
    description: "Unique and customizable keychains, perfect as a personal accessory or gift.",
    images: [Keychain1, Keychain1, Keychain1,Keychain1, Keychain1, Keychain1],
  },
  shirt: {
    name: "Shirts",
    description: "Classic shirts with modern designs, suitable for both casual and formal occasions.",
    images: [Shirt1, Shirt1, Shirt1,Shirt1, Shirt1, Shirt1],
  },
  labcoat: {
    name: "Lab Coats",
    description: "Professional lab coats designed for comfort and protection in scientific environments.",
    images: [Labcoat1, Labcoat1, Labcoat1,Labcoat1, Labcoat1, Labcoat1],
  },
};



function ProductDetailPage() {
  const { name } = useParams();
  const product = productDetails[name];

  if (!product) {
    return <p>Product not found.</p>;
  }

  const generateWhatsAppLink = (productName) => {
    const phoneNumber = "9923660003";
    const message = `Hello!%20I'm%20interested%20in%20buying%20the%20*${encodeURIComponent(productName)}*%20from%20your%20store.`;
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="product">
      <div className="product_title">
        <h1 className="title">{product.name}</h1>
        <p>{product.description}</p>
      </div>

      <div className="categories">
        {product.images.map((image, index) => (
          <div className="category-item" key={index}>
            <img src={image} alt={`${product.name} ${index + 1}`} />
            <a href={generateWhatsAppLink(product.name)} target="_blank" rel="noopener noreferrer">
              <button className="shop-btn">Check Now</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetailPage;
