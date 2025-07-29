import React, { useEffect, useState } from 'react';
import '../../css/pages/Login.css';
import logo from '../../images/artificial-intelligence.png';
import { useNavigate } from 'react-router-dom';


const Login = ({username, setUsername, loggedIn, setLoggedIn}) => {
  const navigate = useNavigate();
  const [localUsername, setLocalUsername] = useState(username);

  useEffect(() => {
    const originalBodyStyle = document.body.style.cssText;
    const originalHtmlStyle = document.documentElement.style.cssText;

    document.body.style.backgroundColor = 'rgb(102, 74, 189)';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
    document.body.style.margin = '0';

    document.documentElement.style.margin = '0';
    document.documentElement.style.height = '100%';
    document.documentElement.style.fontFamily = "'fredoka-one', sans-serif";
    document.documentElement.style.boxSizing = 'border-box';
    document.documentElement.style.overflowX = 'hidden';
    document.documentElement.style.letterSpacing = '1.5px';
    document.documentElement.style.color = 'rgb(54, 55, 50)';

    return () => {
      document.body.style.cssText = originalBodyStyle;
      document.documentElement.style.cssText = originalHtmlStyle;
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localUsername.trim()) {
      setUsername(localUsername.trim());
      setLoggedIn(true);
      setTimeout(() => {
        navigate('/MindSync');
      }, 500);
    }
  };

  return (
    <div className="container">
      <a href='/MindSync' className="logoRow">
        <p className="logo">MIND</p>
        <img src={logo} alt="Logo" className="logoPic" />
        <p className="logo">SYNC</p>
      </a>

      {loggedIn ? (
        <p>You are logged in as <strong>{username}</strong></p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            name="username"
            required
            placeholder="username"
            className="btn"
            value={localUsername}
            onChange={(e) => setLocalUsername(e.target.value)}
          />
          <br />
          <br />
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="password"
            className="btn"
          />
          <br />
          <br />
          <button type="submit" className="btn">Sign In</button>
        </form>
      )}
    </div>
  );
};

export default Login;

