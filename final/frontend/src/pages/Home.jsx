import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FaUser, FaWarehouse, FaMoneyCheckAlt, FaThumbsUp } from 'react-icons/fa';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Logged out');
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };

    const fetchProducts = async () => {
        try {
            const url = "http://localhost:8080/products";
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            };
            const response = await fetch(url, headers);
            const result = await response.json();
            setProducts(result);
        } catch (err) {
            handleError(err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f8ff', minHeight: '100vh' }}>
            <h4 style={{
    fontFamily: 'Georgia, serif', // Rich, classic font
    color: 'rgba(10, 25, 55, 0.9)', // Dark blue with slight transparency
    fontSize: '1.8rem',
    textAlign: 'center',
    animation: 'fadeInDown 1.5s ease-in-out',
    fontWeight: '500',
    margin: '20px auto',
    maxWidth: '80%'
}}>
    Hi {loggedInUser}
</h4>

<h5 style={{
    fontFamily: 'Georgia, serif', // Consistent classic font
    color: 'rgba(10, 25, 55, 0.85)', // Dark blue with slight transparency
    fontSize: '1.5rem',
    textAlign: 'center',
    animation: 'fadeInUp 2s ease-in-out', // Subtle upward animation
    background: 'linear-gradient(135deg, rgba(10, 25, 55, 0.9), rgba(20, 40, 70, 0.8))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '400',
    letterSpacing: '0.3px',
    padding: '15px',
    backdropFilter: 'blur(10px)', // Acrylic effect for elegance
    margin: '30px auto',
    maxWidth: '70%',
    lineHeight: '1.4'
}}>
    Welcome to your stock haven, where each investment tells a story and every number whispers a promise. Here’s to nurturing your portfolio, growing dreams, and finding the perfect balance, just like love itself.
</h5>

<style>
{`
    @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-50px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(50px); }
        to { opacity: 1; transform: translateY(0); }
    }
`}
</style>



            <button
                onClick={handleLogout}
                style={{
                    backgroundColor: '#FF6347',
                    color: '#fff',
                    border: 'none',
                    padding: '10px 20px',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    marginBottom: '20px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderRadius: '5px',
                    animation: 'fadeInUp 1.5s ease-in-out'
                }}
            >
                Logout
            </button>

            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '30px' }}>
                <div style={{ 
                    backgroundColor: '#e0f7fa', 
                    padding: '20px', 
                    borderRadius: '10px', 
                    width: '250px', 
                    textAlign: 'center', 
                    margin: '10px', 
                    animation: 'zoomIn 2s ease-in-out', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
                }}>
                    <FaUser size={50} style={{ color: '#007BFF', marginBottom: '10px' }} />
                    <h2 style={{ color: '#007BFF' }}>Account</h2>
                    <p>Manage your account settings and preferences.</p>
                </div>

                <div style={{ 
                    backgroundColor: '#e8f5e9', 
                    padding: '20px', 
                    borderRadius: '10px', 
                    width: '250px', 
                    textAlign: 'center', 
                    margin: '10px', 
                    animation: 'zoomIn 2s ease-in-out', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
                }}>
                    <FaWarehouse size={50} style={{ color: '#28a745', marginBottom: '10px' }} />
                    <h2 style={{ color: '#28a745' }}>Demat</h2>
                    <p>View your Demat holdings and investments.</p>
                </div>

                <div style={{ 
                    backgroundColor: '#fff3e0', 
                    padding: '20px', 
                    borderRadius: '10px', 
                    width: '250px', 
                    textAlign: 'center', 
                    margin: '10px', 
                    animation: 'zoomIn 2s ease-in-out', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
                }}>
                    <FaMoneyCheckAlt size={50} style={{ color: '#FF6347', marginBottom: '10px' }} />
                    <h2 style={{ color: '#FF6347' }}>Deposits</h2>
                    <p>Check your recent deposits and transactions.</p>
                </div>

                <div style={{ 
                    backgroundColor: '#ede7f6', 
                    padding: '20px', 
                    borderRadius: '10px', 
                    width: '250px', 
                    textAlign: 'center', 
                    margin: '10px', 
                    animation: 'zoomIn 2s ease-in-out', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
                }}>
                    <FaThumbsUp size={50} style={{ color: '#673AB7', marginBottom: '10px' }} />
                    <Link to={"/dashboard/appz"}><h2 style={{ color: '#673AB7' }}>Recommended</h2></Link>
                    <p>Explore recommended products and services.</p>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Link
                    to={'/dashboard/z'}
                    style={{
                        fontSize: '1rem',
                        color: '#007BFF',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        animation: 'fadeIn 2s ease-in-out'
                    }}
                >
                    Click here for Dashboard
                </Link>
            </div>

            <ToastContainer />

            <style>{`
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-50%); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(50%); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes zoomIn {
                    from { transform: scale(0.5); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </div>
    );
}

export default Home;
