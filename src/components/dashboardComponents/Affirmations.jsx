import { useEffect, useState } from "react";
import '../../css/dashboardComponentsCSS/Affirmations.css'

const affirmations = [
  "I am doing my best, and that is enough.",
  "I am worthy of love and respect.",
  "Today, I choose peace over worry.",
  "My mind is calm, and my body is relaxed.",
  "I trust the process of life.",
  "I let go of what I can’t control.",
  "I believe in my ability to heal and grow.",
  "Each breath I take fills me with calm.",
  "I am exactly where I need to be.",
  "I deserve to take care of myself."
];

function getTodayKey() {
  return new Date().toISOString().split("T")[0];
}

export default function Affirmations() {
  const [affirmation, setAffirmation] = useState("");

  useEffect(() => {
    const today = getTodayKey();
    const stored = JSON.parse(localStorage.getItem("dailyAffirmation"));

    if (stored && stored.date === today) {
      setAffirmation(stored.text);
    } else {
      const newAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
      localStorage.setItem(
        "dailyAffirmation",
        JSON.stringify({ text: newAffirmation, date: today })
      );
      setAffirmation(newAffirmation);
    }
  }, []);

  return (
    <div className="affirmation-box">
      <h2 className="affirmation-title">Daily Affirmation</h2>
      <p className="affirmation-text">"{affirmation}"</p>
    </div>
  );
}
