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
import ProductDetailPage from "./ProductDetail.jsx";
import About from "./About_US.jsx";
import ProductInDetail from "./ProductInDetail.jsx"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
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
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar/>
              <About/>
              <Footer/>
            </>
          }
        />
        <Route 
          path="/product/:name" 
          element={
            <>
              <Navbar />
              <ProductDetailPage />
              <Footer/>
            </>
          } 
        />
        <Route 
          path="/product-detail" 
          element={
            <>
              <Navbar />
              <ProductInDetail />
              <Footer/>
            </>
          } 
        />
      </Routes>
    </Router>
  );
}
