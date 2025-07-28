import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'
import mindLogo from '../images/artificial-intelligence.png'

const Header=()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(prev => !prev);

    return (
        <header className="navbar">
        <Link to="/" className="navbar-title"><div>Mind<img src={mindLogo} alt="Logo picture" width={32}/>Sync</div></Link><br />

        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
            ☰ Menu
            </button>

            {isOpen && (
            <ul className="dropdown-menu">
                <nav id="navBar">
                    <h1>Health Tracking</h1>
                    <Link to="/" className="navSelect">Dashboard</Link><br />
                    <Link to="/mood" className="navSelect">Mood</Link><br />
                    <Link to="/sleep" className="navSelect">Sleep</Link><br />
                    <Link to="/exercise" className="navSelect">Exercise</Link><br />

                    <h1>Mindfulness</h1>
                    <Link to="/meditation" className="navSelect">Meditation</Link><br />
                    <Link to="/journal" className="navSelect">Journal</Link><br />

                    <h1>Progress</h1>
                    <Link to="/planner" className="navSelect">Planner</Link><br />
                    <Link to="/habits" className="navSelect">Habit Tracker</Link><br />
                    <Link to="/goals" className="navSelect">Goals</Link><br />
                    <Link to="/charts" className="navSelect">Charts</Link><br />
                    <Link to="/achievements" className="navSelect">Achievements</Link><br />
                </nav>
            </ul>
            
            )}
        </div>
        </header>
    );

}

export default Header;