import React, { useState } from 'react';
import '../../css/App.css';

const Breathing = () => {
    const [count, setCount] = useState(60);
    const [isRunning, setIsRunning] = useState(false);
    const [timer, setTimer] = useState(null);

    const startTimer = () => {
        if (isRunning) return;
        
        setIsRunning(true);
        const countdown = setInterval(() => {
            setCount(prevCount => {
                if (prevCount <= 1) {
                    clearInterval(countdown);
                    setIsRunning(false);
                    return 60;
                }
                return prevCount - 1;
            });
        }, 1000);
        
        setTimer(countdown);
    };

    const stopTimer = () => {
        if (timer) {
            clearInterval(timer);
            setTimer(null);
        }
        setIsRunning(false);
        setCount(60);
    };

    return (
        <div className="content active">
            <h1>Breathing</h1>
            <div id="countBox">
                {count}
            </div>
            <button onClick={isRunning ? stopTimer : startTimer}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
        </div>
    );
};

export default Breathing;
