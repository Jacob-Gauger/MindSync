import React from 'react';
import '../css/Logout.css';

const Logout = () => {
    return (
        <div className="logout-container">
            <h1 className="logout-title">You've been logged out</h1>
            <a href="#">
                <button className="logout-btn">Back to sign in</button>
            </a>
        </div>
    );
};

export default Logout;
