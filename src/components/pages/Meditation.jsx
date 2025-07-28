import { useState, useEffect, useRef } from "react";
import "../../css/pages/Meditation.css";
import BreathingVisual from "./BreathingVisual";

const meditationTypes = [
  "Mindfulness",
  "Breathing",
];

export default function Meditation() {
  const [type, setType] = useState("Mindfulness");
  const [duration, setDuration] = useState(5);
  const [secondsLeft, setSecondsLeft] = useState(duration * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => {
    setSecondsLeft(duration * 60);
    setIsRunning(true);
  };

  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(duration * 60);
  };

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="meditation-module">
      <h2>Meditation</h2>

      <div className="meditation-settings">
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            {meditationTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>

        <label>
          Duration:
          <select
            value={duration}
            onChange={(e) => {
              setDuration(parseInt(e.target.value));
              setSecondsLeft(parseInt(e.target.value) * 60);
            }}
          >
            <option value={5}>5 minutes</option>
            <option value={10}>10 minutes</option>
            <option value={15}>15 minutes</option>
            <option value={20}>20 minutes</option>
            <option value={30}>30 minutes</option>
          </select>
        </label>
      </div>

      <div className="timer-display">{formatTime(secondsLeft)}</div>

      <div className="controls">
        {!isRunning ? (
          <button onClick={handleStart}>Start</button>
        ) : (
          <button onClick={handlePause}>Pause</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
      {type === "Breathing" && <BreathingVisual isRunning={isRunning}/>}
    </div>
  );
}
