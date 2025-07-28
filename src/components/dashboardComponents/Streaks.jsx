import React, { useEffect, useState } from "react";
import "../../css/dashboardComponentsCSS/Streaks.css";

const trackedModules = [
  { key: "streak_meditation", label: "Meditation" },
  { key: "streak_journal", label: "Journal" },
  { key: "streak_exercise", label: "Exercise" }
];

const getTodayKey = () => new Date().toISOString().split("T")[0];
const getYesterdayKey = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
};

const Streaks = () => {
  const [streaks, setStreaks] = useState([]);

  useEffect(() => {
    const today = getTodayKey();
    const yesterday = getYesterdayKey();

    const updated = trackedModules.map((mod) => {
      const data = JSON.parse(localStorage.getItem(mod.key)) || {
        lastActiveDate: null,
        streakCount: 0
      };

      let displayStreak = 0;

      if (data.lastActiveDate === today || data.lastActiveDate === yesterday) {
        displayStreak = data.streakCount;
      }

      return { label: mod.label, streak: displayStreak };
    });

    setStreaks(updated);
  }, []);

  return (
    <div id="streaks">
      <h2>Streak Tracker</h2>
      <ul className="streak-list">
        {streaks.map(({ label, streak }) => (
          <li key={label} className="streak-item">
            <span>{label}:</span> <strong>{streak} day{streak !== 1 ? "s" : ""}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Streaks;
