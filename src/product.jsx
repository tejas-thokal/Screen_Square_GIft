import "./product.css";
import tshirt from "./assets/combine.png";
import Mug from "./assets/mug4.png";
import Hoodie from "./assets/hoodie.png";
import Flaskset from "./assets/flaskset.png";
import Cap from "./assets/cap.png";
import Wallet from "./assets/wallet.png";
import Bottle from "./assets/bottle.png";
import Set from "./assets/set.png";

const products = [
  { id: 1, name: "Customize Tshirts", description: "for Gift", image: tshirt, className: "tshirt special-card" },
  { id: 2, name: "Customize Mug", description: "for Gift", image: Mug, className: "mug mug-card" },
  { id: 3, name: "Customize Hoodies", description: "for Gift", image: Hoodie, className: "hoodie" },
  { id: 5, name: "Customize Bottle", description: "for Gift", image: Flaskset, className: "flaskset" },
  { id: 6, name: "Customize Cap", description: "for Gift", image: Cap, className: "cap" },
  { id: 8, name: "Customize Wallet", description: "for Gift", image: Wallet, className: "wallet" },
  { id: 9, name: "Customize bottle", description: "for Gift", image: Bottle, className: "Bottle" },
  { id: 10, name: "Customize set", description: "for Gift", image: Set, className: "Set" }
];

export default function Product() {

  // WhatsApp link generation function
  const generateWhatsAppLink = (productName) => {
    const phoneNumber = "9923660003"; // Your WhatsApp phone number
    const message = `Hello!%20I'm%20interested%20in%20buying%20the%20*${encodeURIComponent(productName)}*%20from%20your%20store.`;
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className={`product-card ${product.className}`}>
          <div className="right">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="left">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <a href={generateWhatsAppLink(product.name)} target="_blank" rel="noopener noreferrer">
              <button className="shop-btn">Check Now</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
