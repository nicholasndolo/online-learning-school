// src/components/Layout/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav>
            <Link to="/courses">Courses</Link>
            {!user ? (
                <Link to="/login">Login</Link>
            ) : (
                <>
                    <span>Hello, {user.name}</span>
                    <button onClick={logout}>Logout</button>
                </>
            )}
        </nav>
    );
};

export default Navbar;
