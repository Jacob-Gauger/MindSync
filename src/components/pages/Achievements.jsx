import React, { useState } from 'react';
import '../../css/pages/Achievements.css';

export const mockAchievements = [
  { id: 1, title: 'Early Bird', description: 'Wake up before 6 AM for 7 days in a row', unlocked: false },
  { id: 2, title: 'Focused Worker', description: 'Complete 3 tasks without distraction', unlocked: false },
  { id: 3, title: 'Sleep Master', description: 'Get 8+ hours of sleep for 10 days', unlocked: false },
];

const Achievements = ({achievements, setAchievements}) => {

  const unlockAchievement = (id) => {
    setAchievements((prev) =>
      prev.map((ach) =>
        ach.id === id ? { ...ach, unlocked: true } : ach
      )
    );
  };

  return (
    <div className="achievement-container">
      <ul className="achievement-list">
        {achievements.map(({ id, title, description, unlocked }) => (
          <li key={id} className={`achievement-item ${unlocked ? 'unlocked' : 'locked'}`}>
            <h3>{title}</h3>
            <p>{description}</p>
            {unlocked ? (
              <span className="status unlocked">Unlocked ✅</span>
            ) : (
              <button className="unlock-btn" onClick={() => unlockAchievement(id)}>Unlock</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
