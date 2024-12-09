import React, { useState } from "react";
import "./Login.css"; // Include styles here or in this file

const Login = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // **Replace with your actual authentication logic**
      if (password === "dummy_password") { 
        // Simulate successful login
        localStorage.setItem('token', 'your_token_here'); 
        setIsLoggedIn(true); 
      } else {
        alert("Incorrect password.");
      }
    };

  return (
    <div className="login-container">
      <div className="logo">
        <span className="logo-o">O</span>
        <span className="logo-x">X</span>
        <span className="logo-g">G</span>
      </div>
      <h2 className="title">MATERIALDATENBANK</h2>
      <form className="login-form" onSubmit={handleSubmit}> 
        <div className="input-group">
          <label htmlFor="username">USER</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="login-button">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;