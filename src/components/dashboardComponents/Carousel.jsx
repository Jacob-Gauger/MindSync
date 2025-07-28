import React, { useState } from "react";
import "../../css/dashboardComponentsCSS/Carousel.css";
import RecentMoods from "../pages/RecentMoods.jsx";
import { Link } from "react-router-dom";

const Carousel = ({moodHistory}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: <Link to="/mood">Recent Moods</Link>,
      component: <RecentMoods moodHistory={moodHistory}/>,
    },
    {
      title: "Achievements",
      component: <p>Track milestones. Coming soon!</p>,
    },
    {
      title: "Progress Charts",
      component: <p>Visualize your wellness journey. Coming soon!</p>,
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-container">
      <button className="carousel-arrow" onClick={prevSlide}>←</button>

      <div className="carousel-slide-box">
        <h3>{slides[currentIndex].title}</h3>
        <div className="carousel-content">{slides[currentIndex].component}</div>
      </div>

      <button className="carousel-arrow" onClick={nextSlide}>→</button>
    </div>
  );
};

export default Carousel;
