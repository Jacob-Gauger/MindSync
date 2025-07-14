import React from "react";
import '../css/Journal.css'

const Journal=()=>{
    return(
        <div className="content" id="journal">
            <h1>journal</h1>
            <textarea id="journalInput" name="journalInput" placeholder="Today I..."></textarea>
            <button type="submit">submit entry</button>

            <h1>Audio journal</h1>
            <p>Start an audio journal?</p>
            <button>start</button>
        </div>
    );
}

export default Journal;
