import React from "react";
import '../../css/dashboardComponentsCSS/Planner.css'

const Planner=({tasks, setTasks})=>{
    return(
        <div id="planner">
            <div className="task-preview">
            <h2>Planner</h2>
            {tasks.length === 0 ? (
              <p>No tasks added yet.</p>
            ) : (
              <ul>
                {tasks.map((task) => (
                  <li key={task.id}>
                    {task.time} – {task.text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
    )
}

export default Planner