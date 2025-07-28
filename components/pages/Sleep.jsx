import React, { useState } from 'react';
import '../../css/App.css';

const Sleep = () => {
    const [sleepData, setSleepData] = useState({
        hours: '',
        comfort: '',
        obstacles: '',
        wakeUps: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sleep data submitted:', sleepData);
        // Here you would typically save the data to localStorage or send to a server
    };

    const handleChange = (e) => {
        setSleepData({
            ...sleepData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="content active">
            <h1>Sleep</h1>
            <p>Sleep is very important to maintaining your mental health. It is recommended that you sleep for 8 hours a day.</p>
            <p>The following quiz will assess how well you have slept the past night.</p>

            <form onSubmit={handleSubmit}>
                <ol>
                    <li>
                        How many hours of sleep did you get last night?
                        <br />
                        <input 
                            type="radio" 
                            id="sleepQ1-1" 
                            name="hours" 
                            value="8plus"
                            onChange={handleChange}
                        />
                        <label htmlFor="sleepQ1-1">I slept more than 8 hours</label><br />
                        <input 
                            type="radio" 
                            id="sleepQ1-2" 
                            name="hours" 
                            value="6-8"
                            onChange={handleChange}
                        />
                        <label htmlFor="sleepQ1-2">6 - 8 hours</label><br />
                        <input 
                            type="radio" 
                            id="sleepQ1-3" 
                            name="hours" 
                            value="4-6"
                            onChange={handleChange}
                        />
                        <label htmlFor="sleepQ1-3">4 - 6 hours</label><br />
                        <input 
                            type="radio" 
                            id="sleepQ1-4" 
                            name="hours" 
                            value="2-4"
                            onChange={handleChange}
                        />
                        <label htmlFor="sleepQ1-4">2 - 4 hours</label><br />
                        <input 
                            type="radio" 
                            id="sleepQ1-5" 
                            name="hours" 
                            value="1-2"
                            onChange={handleChange}
                        />
                        <label htmlFor="sleepQ1-5">1 - 2 hours</label><br />
                        <input 
                            type="radio" 
                            id="sleepQ1-6" 
                            name="hours" 
                            value="little-none"
                            onChange={handleChange}
                        />
                        <label htmlFor="sleepQ1-6">I got little to no sleep last night</label><br />
                    </li>
                    
                    <li>
                        How comfortable were you sleeping last night?
                        <br />
                        <input 
                            type="radio" 
                            id="sleepQ2-1" 
                            name="comfort" 
                            value="very-comfortable"
                            onChange={handleChange}
                        />
                        <label htmlFor="sleepQ2-1">Very comfortable</label><br />
                        <input 
                            type="radio" 
                            id="sleepQ2-2" 
                            name="comfort" 
                            value="comfortable"
                            onChange={handleChange}
                        />
                        <label htmlFor="sleepQ2-2">Comfortable enough</label><br />
                        <input 
                            type="radio" 
                            id="sleepQ2-3" 
                            name="comfort" 
                            value="alright"
                            onChange={handleChange}
                        />
                        <label htmlFor="sleepQ2-3">It was alright</label><br />
                        <input 
                            type="radio" 
                            id="sleepQ2-4" 
                            name="comfort" 
                            value="not-comfortable"
                            onChange={handleChange}
                        />
                        <label htmlFor="sleepQ2-4">I was not comfortable last night</label><br />
                    </li>
                    
                    <li>
                        Has anything prevented you from sleeping comfortably last night?
                        <br />
                        <input 
                            type="radio" 
                            id="sleepQ3-1" 
                            name="obstacles" 
                            value="stress"
                            onChange={handleChange}
                        />
                        <label htmlFor="sleepQ3-1">Stress</label><br />
                        <input 
                            type="radio" 
                            id="sleepQ3-2" 
                            name="obstacles" 
                            value="sleeping-space"
                            onChange={handleChange}
                        />
                        <label htmlFor="sleepQ3-2">Sleeping space</label><br />
                        <input 
                            type="radio" 
                            id="sleepQ3-3" 
                            name="obstacles" 
                            value="lights-noise"
                            onChange={handleChange}
                        />
                        <label htmlFor="sleepQ3-3">Lights/noise</label><br />
                        <input 
                            type="radio" 
                            id="sleepQ3-4" 
                            name="obstacles" 
                            value="night-terrors"
                            onChange={handleChange}
                        />
                        <label htmlFor="sleepQ3-4">Night terrors</label><br />
                        <input 
                            type="radio" 
                            id="sleepQ3-5" 
                            name="obstacles" 
                            value="other"
                            onChange={handleChange}
                        />
                        <label htmlFor="sleepQ3-5">Other</label><br />
                    </li>
                    
                    <li>
                        How many times did you wake up throughout the night last night?
                        <br />
                        <input 
                            type="radio" 
                            id="sleepQ4-1" 
                            name="wakeUps" 
                            value="10plus"
                            onChange={handleChange}
                        />
                        <label htmlFor="sleepQ4-1">I woke up more than 10 times last night</label><br />
                        <input 
                            type="radio" 
                            id="sleepQ4-2" 
                            name="wakeUps" 
                            value="5plus"
                            onChange={handleChange}
                        />
                        <label htmlFor="sleepQ4-2">I woke up more than 5 times last night</label><br />
                        <input 
                            type="radio" 
                            id="sleepQ4-3" 
                            name="wakeUps" 
                            value="3-4"
                            onChange={handleChange}
                        />
                        <label htmlFor="sleepQ4-3">3-4</label><br />
                        <input 
                            type="radio" 
                            id="sleepQ4-4" 
                            name="wakeUps" 
                            value="1-2"
                            onChange={handleChange}
                        />
                        <label htmlFor="sleepQ4-4">1-2</label><br />
                        <input 
                            type="radio" 
                            id="sleepQ4-5" 
                            name="wakeUps" 
                            value="through-night"
                            onChange={handleChange}
                        />
                        <label htmlFor="sleepQ4-5">I slept through the night</label><br />
                    </li>
                </ol>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Sleep;
