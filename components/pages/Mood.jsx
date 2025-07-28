import React, { useState } from 'react';
import '../../css/App.css';

const Mood = () => {
    const [mood, setMood] = useState('');

    const handleMoodSubmit = (e) => {
        e.preventDefault();
        console.log('Mood submitted:', mood);
        // Here you would typically save the mood data
    };

    return (
        <div className="content active">
            <h1>Mood</h1>
            <p>How are you feeling today?</p>
            
            <form onSubmit={handleMoodSubmit}>
                <div>
                    <input 
                        type="radio" 
                        id="mood-great" 
                        name="mood" 
                        value="great"
                        onChange={(e) => setMood(e.target.value)}
                    />
                    <label htmlFor="mood-great">Great! 😊</label>
                </div>
                
                <div>
                    <input 
                        type="radio" 
                        id="mood-good" 
                        name="mood" 
                        value="good"
                        onChange={(e) => setMood(e.target.value)}
                    />
                    <label htmlFor="mood-good">Good 🙂</label>
                </div>
                
                <div>
                    <input 
                        type="radio" 
                        id="mood-okay" 
                        name="mood" 
                        value="okay"
                        onChange={(e) => setMood(e.target.value)}
                    />
                    <label htmlFor="mood-okay">Okay 😐</label>
                </div>
                
                <div>
                    <input 
                        type="radio" 
                        id="mood-bad" 
                        name="mood" 
                        value="bad"
                        onChange={(e) => setMood(e.target.value)}
                    />
                    <label htmlFor="mood-bad">Bad 😔</label>
                </div>
                
                <div>
                    <input 
                        type="radio" 
                        id="mood-terrible" 
                        name="mood" 
                        value="terrible"
                        onChange={(e) => setMood(e.target.value)}
                    />
                    <label htmlFor="mood-terrible">Terrible 😢</label>
                </div>
                
                <button type="submit">Submit Mood</button>
            </form>
        </div>
    );
};

export default Mood; 