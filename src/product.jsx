import { useEffect, useRef } from "react";
import "./product.css";
import tshirt from "./converted/combine.webp";
import Mug from "./converted/mug4.webp";
import Hoodie from "./converted/hoodie.webp";
import Flaskset from "./converted/flaskset.webp";
import Cap from "./converted/cap.webp";
import Wallet from "./converted/wallet.webp";
import Bottle from "./converted/bottle.webp";
import Set from "./converted/set.webp";
import WhatsAppButton from './components/WhatsAppButton';

const products = [
  { id: 1, name: "Customize Tshirts", description: "for Gift", image: tshirt, className: "tshirt special-card" },
  { id: 2, name: "Customize Mug", description: "for Gift", image: Mug, className: "mug mug-card" },
  { id: 3, name: "Customize Hoodies", description: "for Gift", image: Hoodie, className: "hoodie" },
  { id: 5, name: "Customize Bottle", description: "for Gift", image: Flaskset, className: "flaskset" },
  { id: 6, name: "Customize Cap", description: "for Gift", image: Cap, className: "cap" },
  { id: 8, name: "Customize Wallet", description: "for Gift", image: Wallet, className: "wallet" },
  { id: 9, name: "Customize bottle", description: "for Gift", image: Bottle, className: "Bottle-card" },
  { id: 10, name: "Customize set", description: "for Gift", image: Set, className: "Set" }
];

export default function Product() {
  const gridRef = useRef(null);
  const productRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation class when element comes into view
          entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe the grid container
    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    // Observe each product card
    productRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // WhatsApp link generation function
  const generateWhatsAppLink = (productName) => {
    const phoneNumber = "9923660003";
    const message = `Hello!%20I'm%20interested%20in%20buying%20the%20*${encodeURIComponent(productName)}*%20from%20your%20store.`;
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="product-grid" ref={gridRef}>
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`product-card ${product.className}`}
          ref={el => productRefs.current[index] = el}
        >
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
