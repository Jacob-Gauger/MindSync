import React, { useState } from "react";
import "../../css/dashboardComponentsCSS/Carousel.css";
import RecentMoods from "../pages/RecentMoods.jsx";
import Achievements from "../pages/Achievements.jsx";
import Sleep from "../pages/Sleep.jsx";
import { Link } from "react-router-dom";
import SleepHistory from "../pages/SleepHistory.jsx";

const Carousel = ({moodHistory, achievements, sleepData, setAchievements}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: <Link to="/Mood">Recent Moods</Link>,
      component: <RecentMoods moodHistory={moodHistory}/>,
    },
    {
      title: <Link to="/Achievements">Achievements</Link>,
      component: <Achievements achievements={achievements} setAchievements={setAchievements}/>,
    },
    {
      title: <Link to="/Sleep">Sleep</Link>,
      component: <SleepHistory sleepData={sleepData}/>,
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
