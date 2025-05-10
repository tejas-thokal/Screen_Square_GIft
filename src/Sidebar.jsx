import "./Sidebar.css";
import product from "./assets/product.png"

export default function Sidebar() {
  return (
    <>
    <div className="main d-flex">
      <div className="bg-dark sidebar text-white d-flex flex-column align-items-center py-4" style={{ width: '3em', minHeight: '100vh' }}>
        <a href="#" className="sidebar-icon"><i className="fas fa-tshirt"></i></a>
        <a href="#" className="sidebar-icon"><i className="fas fa-tshirt"></i></a>
        <a href="#" className="sidebar-icon"><i className="fas fa-mug-hot"></i></a>
        <a href="#" className="sidebar-icon"><i className="fas fa-wine-bottle"></i></a>
        <a href="#" className="sidebar-icon"><i className="fas fa-pen"></i></a>
        <a href="#" className="sidebar-icon"><i className="fas fa-utensils"></i></a>
        <a href="#" className="sidebar-icon"><i className="fas fa-book"></i></a>
        <a href="#" className="sidebar-icon"><i className="fas fa-hat-cowboy"></i></a>
        <a href="#" className="sidebar-icon"><i className="fas fa-key"></i></a>
        <a href="#" className="sidebar-icon"><i className="fas fa-wallet"></i></a>
      </div>
      <div className="left1">
                    <img src={product} alt="Product Image" />
                </div>
      <div className="right2">
                    <p>
                        Gifts that <br/>
                        speak <span>volumes</span><br/>
                        about your <span>brand</span>
                    </p>
                    <button>Customize Your Product</button>
      </div>
    </div>
    </>
  );
}

  