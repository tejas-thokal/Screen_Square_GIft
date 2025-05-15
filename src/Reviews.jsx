import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Review1 from "./assets/review1.jpg";
import Review2 from "./assets/review2.jpg";
import Review3 from "./assets/review3.jpg";
import Review4 from "./assets/review4.jpg";
import "./Reviews.css";

const ReviewSlider = () => {
  const reviews = [
    { image: Review1, text: "Great service and friendly staff!" },
    { image: Review2, text: "Highly recommend this company." },
    { image: Review3, text: "Excellent experience from start to finish." },
    { image: Review4, text: "Five stars all the way!" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="outer flex justify-center items-center min-h-screen ">
        <h1>What People are Saying</h1>
      <div className=" inner relative   rounded-xl shadow-lg overflow-hidden ">
        <div className=" inner2 relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={reviews[index].image}
              src={reviews[index].image}
              alt={`Review ${index + 1}`}
              className="motion-img absolute w-full h-full object-cover rounded-lg"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default ReviewSlider;
