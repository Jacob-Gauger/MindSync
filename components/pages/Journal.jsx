import React, { useState } from 'react';
import '../../css/App.css';

const Journal = ({ journalEntries, setJournalEntries }) => {
    const [journalInput, setJournalInput] = useState('');
    const [isRecording, setIsRecording] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (journalInput.trim()) {
            const newEntry = {
                id: Date.now(),
                content: journalInput,
                date: new Date().toLocaleDateString(),
                timestamp: new Date().toISOString()
            };
            setJournalEntries([newEntry, ...journalEntries]);
            setJournalInput('');
        }
    };

    const startAudioJournal = () => {
        setIsRecording(true);
        // Here you would implement actual audio recording functionality
        console.log('Starting audio journal...');
    };

    return (
        <div className="content active">
            <h1>Journal</h1>
            
            <form onSubmit={handleSubmit}>
                <textarea
                    id="journalInput"
                    name="journalInput"
                    placeholder="Today I..."
                    value={journalInput}
                    onChange={(e) => setJournalInput(e.target.value)}
                />
                <button type="submit">Submit Entry</button>
            </form>

            <h1>Audio Journal</h1>
            <p>Start an audio journal?</p>
            <button onClick={startAudioJournal} disabled={isRecording}>
                {isRecording ? 'Recording...' : 'Start'}
            </button>

            {journalEntries.length > 0 && (
                <div>
                    <h2>Previous Entries</h2>
                    {journalEntries.map(entry => (
                        <div key={entry.id} style={{ 
                            border: '1px solid #ccc', 
                            margin: '10px 0', 
                            padding: '10px',
                            borderRadius: '10px'
                        }}>
                            <p><strong>{entry.date}</strong></p>
                            <p>{entry.content}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Journal;
