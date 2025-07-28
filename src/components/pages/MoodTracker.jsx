import { useState } from "react";
import '../../css/pages/MoodTracker.css'

const moods = [
  { label: "Happy", emoji: "😄" },
  { label: "Calm", emoji: "😌" },
  { label: "Sad", emoji: "😢" },
  { label: "Angry", emoji: "😠" },
  { label: "Anxious", emoji: "😟" },
  { label: "Tired", emoji: "😴" },
];

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");
  const [history, setHistory] = useState([]);

  const handleSave = () => {
    if (!selectedMood) return;

    const newEntry = {
      mood: selectedMood,
      note,
      timestamp: new Date().toLocaleString(),
    };

    setHistory([newEntry, ...history]);
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
                className={`mood-button ${
                selectedMood?.label === m.label ? "selected" : ""
                }`}
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

        {history.length > 0 && (
            <div className="mood-history">
            <h3>Recent Moods</h3>
            <ul>
                {history.map((entry, index) => (
                <li key={index} className="mood-entry">
                    <div className="mood-entry-header">
                    <span>{entry.mood.emoji}</span>
                    <span>{entry.timestamp}</span>
                    </div>
                    {entry.note && <p className="mood-entry-note">{entry.note}</p>}
                </li>
                ))}
            </ul>
            </div>
        )}
    </div>
  );
}
