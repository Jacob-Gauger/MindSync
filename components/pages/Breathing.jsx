import { useState, useEffect, useRef } from "react";
import "/css/pages/timer.css";

export default function Breathing() {
  const [selectedMinutes, setSelectedMinutes] = useState(1);
  const [timeLeft, setTimeLeft] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  // Start timer handler
  const startMeditationTimer = () => {
    const totalSeconds = selectedMinutes * 60;
    setTimeLeft(totalSeconds);
    setRunning(true);
  };

  // Timer effect
  useEffect(() => {
    if (!running) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [running]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div id="meditation">
      <div id="meditationTimer">
        <h1>Meditation Timer</h1>

        <select
          id="durationSelect"
          value={selectedMinutes}
          onChange={(e) => setSelectedMinutes(parseInt(e.target.value))}
          disabled={running}
        >
          <option value="1">1 Minute</option>
          <option value="3">3 Minutes</option>
          <option value="5">5 Minutes</option>
          <option value="10">10 Minutes</option>
        </select>

        <div id="timerDisplay">
          {timeLeft > 0 ? formatTime(timeLeft) : running ? "00:00" : "Ready"}
        </div>

        <button id="startBtn" onClick={startMeditationTimer} disabled={running}>
          {running ? "Running..." : "Start"}
        </button>
      </div>
    </div>
  );
}
