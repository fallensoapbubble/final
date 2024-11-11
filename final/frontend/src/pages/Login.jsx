import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
// import Topnavbar from "../landing/Topnavbar";

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('email and password are required');
        }
        try {
            const url = `http://localhost:8080/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/home');
                }, 1000);
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
        } catch (err) {
            handleError(err);
        }
    };

    return (
        <>
            {/* <Topnavbar /> */}
            <div className='container' style={styles.container}>
                <h1 style={styles.heading}>Login</h1>
                <form onSubmit={handleLogin} style={styles.form}>
                    <div style={styles.inputContainer}>
                        <label htmlFor='email' style={styles.label}>Email</label>
                        <input
                            onChange={handleChange}
                            type='email'
                            name='email'
                            placeholder='Enter your email...'
                            value={loginInfo.email}
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.inputContainer}>
                        <label htmlFor='password' style={styles.label}>Password</label>
                        <input
                            onChange={handleChange}
                            type='password'
                            name='password'
                            placeholder='Enter your password...'
                            value={loginInfo.password}
                            style={styles.input}
                        />
                    </div>
                    <button type='submit' style={styles.button}>Login</button>
                    <span style={styles.signupText}>Don't have an account? 
                        <Link to="/signup" style={styles.link}> Signup</Link>
                    </span>
                </form>
                <ToastContainer />
            </div>

        </>
    );
}

const styles = {
    container: {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        animation: 'fadeIn 1s ease-in-out',
        backgroundColor: '#f9f9f9'
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
        fontFamily: 'Arial, sans-serif'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    label: {
        marginBottom: '5px',
        color: '#555',
        fontSize: '14px'
    },
    input: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        outline: 'none',
        transition: 'box-shadow 0.3s ease',
        ':focus': {
            boxShadow: '0 0 5px rgba(81, 203, 238, 1)'
        }
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        fontSize: '16px',
        ':hover': {
            backgroundColor: '#0056b3'
        }
    },
    signupText: {
        textAlign: 'center',
        marginTop: '10px',
        fontSize: '14px'
    },
    link: {
        color: '#007bff',
        textDecoration: 'none',
        marginLeft: '5px',
        ':hover': {
            textDecoration: 'underline'
        }
    }
};

export default Login;
