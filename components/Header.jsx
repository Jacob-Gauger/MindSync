import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'
import mindLogo from '../images/artificial-intelligence.png'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [healthOpen, setHealthOpen] = useState(false);
    const [goalsOpen, setGoalsOpen] = useState(false);
    const [journeyOpen, setJourneyOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(prev => !prev);
    const toggleHealth = () => {
        setHealthOpen(prev => !prev);
        setGoalsOpen(false);
        setJourneyOpen(false);
        setProfileOpen(false);
    };
    const toggleGoals = () => {
        setGoalsOpen(prev => !prev);
        setHealthOpen(false);
        setJourneyOpen(false);
        setProfileOpen(false);
    };
    const toggleJourney = () => {
        setJourneyOpen(prev => !prev);
        setHealthOpen(false);
        setGoalsOpen(false);
        setProfileOpen(false);
    };
    const toggleProfile = () => {
        setProfileOpen(prev => !prev);
        setHealthOpen(false);
        setGoalsOpen(false);
        setJourneyOpen(false);
    };

    return (
        <header className="navbar">
            <Link to="/" className="navbar-title">
                <div>
                    <span>MIND</span>
                    <img src={mindLogo} alt="Logo picture" width={50} height={50} />
                    <span>SYNC</span>
                </div>
            </Link>

            <div className="dropdown">
                <button onClick={toggleHealth} className="underline topBtn">Health</button>
                {healthOpen && (
                    <div className="dropdownContent">
                        <Link to="/">Dashboard</Link>
                        <Link to="/mood">Mood</Link>
                        <Link to="/sleep">Sleep</Link>
                        <Link to="/meditation">Meditation</Link>
                    </div>
                )}
            </div>

            <div className="dropdown">
                <button onClick={toggleGoals} className="underline topBtn">Goals</button>
                {goalsOpen && (
                    <div className="dropdownContent">
                        <Link to="/goals">Goals</Link>
                        <Link to="/achievements">Achievements</Link>
                    </div>
                )}
            </div>

            <div className="dropdown">
                <button onClick={toggleJourney} className="underline topBtn">My Journey</button>
                {journeyOpen && (
                    <div className="dropdownContent">
                        <Link to="/journal">Journal</Link>
                        <Link to="/planner">Planner</Link>
                        <Link to="/habits">Habit Tracker</Link>
                    </div>
                )}
            </div>

            <div className="dropdown">
                <div className="pfpWrapper">
                    <button onClick={toggleProfile} className="dropdownBtn topBtn">username</button>
                    <img src="../images/pfpHolder.png" alt="Profile picture" className="pfp" />
                </div>
                {profileOpen && (
                    <div className="dropdownContent">
                        <Link to="/settings">Settings</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;