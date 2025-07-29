import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'
import mindLogo from '../images/artificial-intelligence.png'
import pfpHolder from '../images/pfpHolder.png'

const Header=()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(prev => !prev);

    return (
        <header className="navbar">
        <Link to="/MindSync" className="navbar-title"><div>Mind<img src={mindLogo} alt="Logo picture" width={32}/>Sync</div></Link><br />
        <div className='rightHeader'>
            <div className="dropdown">
                <button className="dropdown-toggle" onClick={toggleDropdown}>
                ☰ Menu
                </button>

                {isOpen && (
                <ul className="dropdown-menu">
                    <nav id="navBar">
                        <h1>Health Tracking</h1>
                        <Link to="/MindSync" className="navSelect">Dashboard</Link><br />
                        <Link to="/Mood" className="navSelect">Mood</Link><br />
                        <Link to="/Sleep" className="navSelect">Sleep</Link><br />
                        <Link to="/exercise" className="navSelect">Exercise</Link><br />

                        <h1>Mindfulness</h1>
                        <Link to="/Meditation" className="navSelect">Meditation</Link><br />
                        <Link to="/Journal" className="navSelect">Journal</Link><br />

                        <h1>Progress</h1>
                        <Link to="/Planner" className="navSelect">Planner</Link><br />
                        <Link to="/Habits" className="navSelect">Habit Tracker</Link><br />
                        <Link to="/Goals" className="navSelect">Goals</Link><br />
                        <Link to="/Charts" className="navSelect">Charts</Link><br />
                        <Link to="/Achievements" className="navSelect">Achievements</Link><br />
                    </nav>
                </ul>
            
                )}
            </div>
            <Link to="/" className="navbar-title"><img src={pfpHolder} alt="Logo picture" width={32}/></Link><br />
        </div>
        </header>
    );

}

export default Header;