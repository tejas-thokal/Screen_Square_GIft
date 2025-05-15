import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./Work.css";
import WhatsAppButton from './components/WhatsAppButton';
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
    themes: {
      vacation: [RoundNeck_Blue],
      festive: [RoundNeck_Blue],
      minimal: [RoundNeck_Blue],
    }
  },
  hoodies: {
    name: "Hoodies",
    description: "Stay warm and fashionable with our premium hoodies, perfect for every season.",
    themes: {
      vacation: [Hoodie1],
      festive: [Hoodie1],
      minimal: [Hoodie1],
    }
  },
  plate: {
    name: "Plate",
    description: "Beautiful designer plates for your dining and decor needs.",
    themes: {
      vacation: [Plate1, Plate2],
      festive: [Plate3, Plate4],
      minimal: [Plate5],
    }
  },
  mugs: {
    name: "Mugs",
    description: "Perfect mugs for your morning coffee, with various designs to match your personality.",
    themes: {
      vacation: [Mug1, Mug2],
      festive: [Mug3, Mug4],
      minimal: [Mug5, Mug6],
    }
  },
  leather: {
    name: "Leather Combos",
    description: "Premium leather combos for the sophisticated you.",
    themes: {
      vacation: [Leather1],
      festive: [Leather1],
      minimal: [Leather1],
    }
  },
  pen: {
    name: "Pens",
    description: "Elegant pens for professionals.",
    themes: {
      vacation: [Pen1],
      festive: [Pen1],
      minimal: [Pen1],
    }
  },
  bottle: {
    name: "Bottles",
    description: "Stay hydrated with our premium range of stylish bottles.",
    themes: {
      vacation: [Bottle1],
      festive: [Bottle1],
      minimal: [Bottle1],
    }
  },
  cap: {
    name: "Caps",
    description: "Stylish and comfortable caps for sunny days.",
    themes: {
      vacation: [Cap1],
      festive: [Cap1],
      minimal: [Cap1],
    }
  },
  wallet: {
    name: "Wallets",
    description: "Classy wallets for both men and women.",
    themes: {
      vacation: [Wallet1],
      festive: [Wallet1],
      minimal: [Wallet1],
    }
  },
  "phone-stand": {
    name: "Mobile Stands",
    description: "Convenient and sturdy mobile stands.",
    themes: {
      vacation: [PhoneStand1],
      festive: [PhoneStand1],
      minimal: [PhoneStand1],
    }
  },
  flaskset: {
    name: "Vacuum Flask Sets",
    description: "Premium vacuum flask sets for hot or cold beverages.",
    themes: {
      vacation: [FlaskSet1],
      festive: [FlaskSet2],
      minimal: [FlaskSet3],
    }
  },
  pillow: {
    name: "Pillows",
    description: "Comfortable and supportive pillows.",
    themes: {
      vacation: [Pillow1],
      festive: [Pillow1],
      minimal: [Pillow1],
    }
  },
  tiffin: {
    name: "Tiffins",
    description: "Practical and stylish tiffins.",
    themes: {
      vacation: [Tiffin1],
      festive: [Tiffin1],
      minimal: [Tiffin1],
    }
  },
  pouch: {
    name: "Pouches",
    description: "Compact and versatile pouches.",
    themes: {
      vacation: [Pouch1],
      festive: [Pouch1],
      minimal: [Pouch1],
    }
  },
  cardholder: {
    name: "Card Holders",
    description: "Sleek and secure card holders.",
    themes: {
      vacation: [CardHolder1],
      festive: [CardHolder1],
      minimal: [CardHolder1],
    }
  },
  apron: {
    name: "Aprons",
    description: "Durable and stylish aprons.",
    themes: {
      vacation: [Apron1],
      festive: [Apron1],
      minimal: [Apron1],
    }
  },
  keychain: {
    name: "Keychains",
    description: "Unique and customizable keychains.",
    themes: {
      vacation: [Keychain1],
      festive: [Keychain1],
      minimal: [Keychain1],
    }
  },
  shirt: {
    name: "Shirts",
    description: "Classic shirts with modern designs.",
    themes: {
      vacation: [Shirt1],
      festive: [Shirt1],
      minimal: [Shirt1],
    }
  },
  labcoat: {
    name: "Lab Coats",
    description: "Professional lab coats for scientific environments.",
    themes: {
      vacation: [Labcoat1],
      festive: [Labcoat1],
      minimal: [Labcoat1],
    }
  },
};

function ProductDetailPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const product = productDetails[name];
  const [selectedTheme, setSelectedTheme] = useState("vacation");

  if (!product) {
    return <div className="error-message">Product not found</div>;
  }

  const themes = Object.keys(product.themes);
  const imagesToShow = product.themes[selectedTheme] || [];

  const handleImageClick = (image) => {
    navigate('/product-detail', { 
      state: { product, image }
    });
  };

  return (
    <div className="product">
      <div className="product_title">
        <h1 className="title">{product.name}</h1>
        <p>{product.description}</p>
      </div>

      <div className="theme-dropdown">
        <label htmlFor="theme">Select Theme: </label>
        <select
          id="theme"
          value={selectedTheme}
          onChange={(e) => setSelectedTheme(e.target.value)}
        >
          {themes.map((theme) => (
            <option key={theme} value={theme}>
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="categories">
        {imagesToShow.map((image, index) => (
          <div className="category-item" key={index}>
            <img 
              src={image} 
              alt={`${product.name} ${index + 1}`} 
              onClick={() => handleImageClick(image)}
              loading="lazy"
            />
            <WhatsAppButton 
              text="Check Now"
              productName={product.name}
              className="shop-btn"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetailPage;