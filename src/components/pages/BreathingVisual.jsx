import { useState, useEffect } from "react";
import '../../css/pages/BreathingVisual.css'

export default function BreathingVisual({ isRunning }) {
  const steps = ["Inhale", "Hold", "Exhale", "Hold"];
  const [stepIndex, setStepIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let intervalId;
    let startDelay;

    if (isRunning) {
      setHasStarted(false);
      setStepIndex(0);

      startDelay = setTimeout(() => {
        setHasStarted(true);
        intervalId = setInterval(() => {
          setStepIndex((prev) => (prev + 1) % steps.length);
        }, 4000);
      }, 400);
    } else {
      // If not running, reset
      setHasStarted(false);
      setStepIndex(0);
    }

    return () => {
      clearTimeout(startDelay);
      clearInterval(intervalId);
    };
  }, [isRunning]);

  function getBoxClass() {
    if (!hasStarted) return "";

    switch (steps[stepIndex]) {
      case "Inhale":
        return "box-inhale";
      case "Exhale":
        return "box-exhale";
      case "Hold":
        return stepIndex === 1 ? "box-hold-inhale" : "box-hold-exhale";
      default:
        return "";
    }
  }

  return (
    <div className="box-breathing-container">
      <div className={`box ${hasStarted ? getBoxClass() : ""}`}></div>
      <p className="breath-step">{hasStarted ? steps[stepIndex] : "Get Ready..."}</p>
    </div>
  );
}
