import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SignupWrap() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [animationStyle, setAnimationStyle] = useState('');

  

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/api/login', { user, password });

      if (response.status === 200) {
        setIsLoggedIn(true);
        setAnimationStyle('animate-welcome'); // Trigger welcome animation
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      alert('Invalid credentials');
      console.error("Login Error: ", error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/api/signup', { user, password });

      if (response.status === 200) {
        alert('Signup successful! You can now log in.');
        setIsSignup(false); // Switch to login page after successful signup
      } else {
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      alert('Signup failed. Please try again.');
      console.error("Signup Error: ", error);
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    position: 'relative',
  };

  const formStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
    position: 'relative',
    zIndex: 1,
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const animationContainerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  };

  const animationImageStyle = (src, animationName, position) => ({
    position: 'absolute',
    width: '150px',
    height: '150px',
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'transform 0.3s ease',
    animation: `${animationName} 20s infinite linear`,
    ...position,
  });

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2>{isSignup ? 'Sign Up' : 'Log In'}</h2>
        <form onSubmit={isSignup ? handleSignup : handleLogin}>
          <input
            type="text"
            placeholder="Full Name"
            style={inputStyle}
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
          >
            {isSignup ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        <p>
          {isSignup ? 'Already have an account? ' : "Don't have an account? "}
          <span
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? 'Log In' : 'Sign Up'}
          </span>
        </p>
      </div>

      {isLoggedIn && (
        <div className={`welcome-message ${animationStyle}`}>
          <h3>Welcome, {user}!</h3>
        </div>
      )}

      <div style={animationContainerStyle}>
        <div
          style={animationImageStyle('../../../public/images/pricing0.svg', 'rotate', { top: '10px', left: '10px' })}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        />
        <div
          style={animationImageStyle('../../../public/images/logo.svg', 'zoomIn', { bottom: '10px', right: '50px' })}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.5)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        />
        <div
          style={animationImageStyle('../../../public/images/pricing0.svg', 'rotate', { bottom: '10px', left: '10px' })}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        />
        <div
          style={animationImageStyle('../../../public/images/tijori.svg', 'zoomIn', { top: '10px', right: '10px' })}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        />
      </div>

      <style>
        {`
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes zoomIn {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }

          .animate-welcome {
            animation: fadeIn 1s ease-in-out;
          }

          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          .welcome-message {
            text-align: center;
            font-size: 1.5em;
            margin-top: 20px;
          }
        `}
      </style>
    </div>
  );
}

export default SignupWrap;
