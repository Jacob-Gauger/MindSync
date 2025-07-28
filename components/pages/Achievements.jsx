import React from 'react';
import '../../css/Achievements.css';
import checkedIcon from '../../images/mark.png';
import uncheckedIcon from '../../images/unmarked.png';

const Achievements = () => {
    const achievements = [
        { id: 1, description: "Day One!", completed: true },
        { id: 2, description: "Enter your first journal entry", completed: false },
        { id: 3, description: "One week streak", completed: true }
    ];

    return (
        <div className="achievements-container">
            <h1 className="achievements-title">Achievements</h1>
            {achievements.map(achievement => (
                <div key={achievement.id} className="achievement">
                    <img
                        src={achievement.completed ? checkedIcon : uncheckedIcon}
                        alt={achievement.completed ? "Completed" : "Not completed"}
                        className="status"
                    />
                    <p>#{achievement.id}: {achievement.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Achievements; 