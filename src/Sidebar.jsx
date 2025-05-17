import React from "react";
import { Link } from "react-router-dom";
import product from "./converted/product.webp";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <>
    <div className="main d-flex">
      <div className="left1">
                    <img src={product} alt="Product Image" />
                </div>
      <div className="right2">
                    <p>
                        Gifts that <br/>
                        speak <span>volumes</span><br/>
                        about your <span>brand</span>
                    </p>
                    <h1>Your One-Stop Solution for <br /> Custom
Corporate Printing and  Branding Needs.</h1>
                    <button>Customize Your Product</button>
      </div>
    </div>
    </>
  );
}
