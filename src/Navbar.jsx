import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { useState } from "react"; // Import React's useState hook
import "./Navbar.css"; // Ensure it has styles for both navbar and sidebar
import "./Sidebar.css"; // Optional: if you had sidebar styles separate

export default function NavbarWithSidebar() {
    const [isNavOpen, setIsNavOpen] = useState(false); // Track the navbar state

    // Toggle the navbar on and off
    const handleNavbarToggle = () => {
        setIsNavOpen(!isNavOpen); // Toggle the navbar state
    };

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div className="bg-dark sidebar text-white d-flex flex-column align-items-center py-4"
                style={{ width: '3em', minHeight: '100vh' }}>
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

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
                <div className="container-fluid ">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Screen Square" className="navbar-logo"/>
                    </Link>

                    {/* TOGGLE BUTTON */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={handleNavbarToggle} // Handle click manually
                        aria-expanded={isNavOpen ? "true" : "false"} // Update aria-expanded based on state
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* COLLAPSIBLE CONTENT */}
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex flex-row gap-4 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex rside" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
