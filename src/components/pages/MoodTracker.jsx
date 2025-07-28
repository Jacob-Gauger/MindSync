import { useState } from "react";
import '../../css/pages/MoodTracker.css';
import RecentMoods from "./RecentMoods";

const moods = [
  { label: "Happy", emoji: "😄" },
  { label: "Calm", emoji: "😌" },
  { label: "Sad", emoji: "😢" },
  { label: "Angry", emoji: "😠" },
  { label: "Anxious", emoji: "😟" },
  { label: "Tired", emoji: "😴" },
];

export default function MoodTracker({moodHistory, setMoodHistory}) {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");

  const handleSave = () => {
    if (!selectedMood) return;

    const newEntry = {
      mood: selectedMood,
      note,
      timestamp: new Date().toLocaleString(),
    };

    setMoodHistory([newEntry, ...moodHistory]);
    setSelectedMood(null);
    setNote("");
  };

  return (
    <div className="mood-tracker">
      <h2>Mood Tracker</h2>

      <div className="mood-options">
        {moods.map((m) => (
          <button
            key={m.label}
            onClick={() => setSelectedMood(m)}
            className={`mood-button ${selectedMood?.label === m.label ? "selected" : ""}`}
            title={m.label}
          >
            {m.emoji}
          </button>
        ))}
      </div>

      <textarea
        className="note-textarea"
        placeholder="Add a note (optional)..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={handleSave} className="save-button">
        Save Mood
      </button>
      <RecentMoods moodHistory={moodHistory}/>
    </div>
  );
}
