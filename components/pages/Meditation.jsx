import React, { useState } from 'react';
import '../../css/App.css';

const Meditation = () => {
    const [isMeditating, setIsMeditating] = useState(false);
    const [meditationTime, setMeditationTime] = useState(5);

    const startMeditation = () => {
        setIsMeditating(true);
        // Here you would implement actual meditation timer functionality
        console.log(`Starting ${meditationTime} minute meditation...`);
    };

    return (
        <div className="content active">
            <h1>Meditation</h1>
            <p>Take a moment to center yourself and find peace.</p>
            
            <div>
                <label htmlFor="meditation-time">Meditation Duration (minutes):</label>
                <select 
                    id="meditation-time"
                    value={meditationTime}
                    onChange={(e) => setMeditationTime(parseInt(e.target.value))}
                    disabled={isMeditating}
                >
                    <option value={1}>1 minute</option>
                    <option value={5}>5 minutes</option>
                    <option value={10}>10 minutes</option>
                    <option value={15}>15 minutes</option>
                    <option value={20}>20 minutes</option>
                </select>
            </div>
            
            <button onClick={startMeditation} disabled={isMeditating}>
                {isMeditating ? 'Meditating...' : 'Start Meditation'}
            </button>
            
            <div>
                <h3>Meditation Tips:</h3>
                <ul>
                    <li>Find a comfortable, quiet place</li>
                    <li>Sit with your back straight</li>
                    <li>Focus on your breath</li>
                    <li>Let thoughts pass without judgment</li>
                    <li>Start with short sessions and gradually increase</li>
                </ul>
            </div>
        </div>
    );
};

export default Meditation; 