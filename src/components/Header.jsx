import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'

const Header=()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(prev => !prev);

    return (
        <header className="navbar">
        <div className="navbar-title">MindSync</div>

        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
            Menu ▾
            </button>

            {isOpen && (
            <ul className="dropdown-menu">
                <nav id="navBar">
                    <h1>Health</h1>
                    <Link to="/" className="navSelect">Dashboard</Link><br />
                    <Link to="/mood" className="navSelect">Mood</Link><br />
                    <Link to="/exercise" className="navSelect">Exercise</Link><br />
                    <Link to="/sleep" className="navSelect">Sleep</Link><br />
                    <Link to="/breathing" className="navSelect">Breathing</Link><br />
                    <Link to="/meditation" className="navSelect">Meditation</Link><br />

                    <h1>Goals</h1>
                    <Link to="/goals" className="navSelect">Goals</Link><br />
                    <Link to="/achievements" className="navSelect">Achievements</Link><br />

                    <h1>Wellness Journey</h1>
                    <Link to="/journal" className="navSelect">Journal</Link><br />
                    <Link to="/planner" className="navSelect">Planner</Link><br />
                    <Link to="/charts" className="navSelect">Charts</Link><br />
                    <Link to="/habits" className="navSelect">Habit Tracker</Link><br />
                </nav>
            </ul>
            
            )}
        </div>
        </header>
    );

}

export default Header;