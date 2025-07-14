import React from "react";

const Habits=()=>{
    return(
        <section id="habitDash">
            <h2>Habit Tracker</h2>
            <p id="habit-summary">0 / 0 habits completed</p>
            <div id="habitProgBar">
                <div id="habitProgress"></div>
            </div>
        </section>
    )
}

export default Habits