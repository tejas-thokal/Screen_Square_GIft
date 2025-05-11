import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Home from "./Home_temp.jsx";
import Product from "./product.jsx";
import Footer from "./Footer.jsx";
import Skills from "./Skills.jsx";
import ReviewSlider from "./Reviews.jsx";
import Work from "./Work.jsx";
import Contact from "./Contact_Us.jsx";
import ProductDetail from "./ProductDetail.jsx";
import About from "./About_US.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sidebar />
              <Product/>
              <Skills />
              <ReviewSlider />
              <Footer />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Navbar/>
              <Work />
              <Footer />
            </>
          }
        />
        <Route
        path="/contact"
        element={
          <>
          <Navbar/>
          <Contact/>
          <Footer/>
          </>
        }/>
        <Route
        path="/about"
        element={
          <>
          <Navbar/>
          <About/>
          <Footer/>
          </>
        }/>
        <Route path="/" element={<Work />} />
        <Route path="/product/:name" element={<><ProductDetail /><Footer/></>} />
      </Routes>
    </Router>
  );
}
