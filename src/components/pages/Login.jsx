import React, { useEffect } from 'react';
import '../../css/pages/Login.css';
import logo from '../../images/artificial-intelligence.png';



const Login = () => {
  useEffect(() => {
    // Save original styles to revert later
    const originalBodyStyle = document.body.style.cssText;
    const originalHtmlStyle = document.documentElement.style.cssText;

    // Apply login-specific styles
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

    // Cleanup on unmount: restore original styles
    return () => {
      document.body.style.cssText = originalBodyStyle;
      document.documentElement.style.cssText = originalHtmlStyle;
    };
  }, []);

  return (
    <div className="container">
      <div className="logoRow">
        <p className="logo">MIND</p>
        <img src={logo} alt="Logo" className="logoPic" />
        <p className="logo">SYNC</p>
      </div>

      <form action="/login" method="post">
        <input
          type="text"
          id="username"
          name="username"
          required
          placeholder="username"
          className="btn"
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
      </form>

      <a href="/MindSync">
        <button className="btn">sign in</button>
      </a>
    </div>
  );
};

export default Login;
