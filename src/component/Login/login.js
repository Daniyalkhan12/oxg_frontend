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
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const login = {
        "username": username, 
        "password": password
      }
      console.log(process.env)
      console.log(''+process.env+'/user/login/')
      const response = await fetch(''+process.env.REACT_APP_API_URL+'/api/user/login/', {
        method: 'POST',
        body: JSON.stringify(login),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      console.log(response)
      const json = await response.json()
      console.log(json)
      if (json.code == 400){
        alert("Username or Password wrong, Please try again!")
        setIsLoggedIn(false)  
      }
      if (json.code == 200){
        const access = json.data.access;
        localStorage.setItem('accessToken', access);
        const refresh = json.data.refresh;
        localStorage.setItem('refreshToken', refresh);
        const username = json.data.username;
        localStorage.setItem('username', username);
        setIsLoggedIn(true)
  
  
       alert("User Logged in Successfully!")
      //  navigate('/listingPage')
      // window.location.href = "/listingPage"
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