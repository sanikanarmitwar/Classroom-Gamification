// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file

const Navbar = ({ data }) => {
    return (
        <nav className="navbar">
            <h1>Classroom Gamification Portal</h1>
            <div className="navbar-links">
                <button className="nav-btn" onClick={() => {window.location.href='/';}}>Home</button>
                <div className="dropdown">
                    <button className="dropbtn">Classes</button>
                    <div className="dropdown-content">
                        {data.map(classItem => (
                            <Link key={classItem.id} to={`/class/${classItem.id}`}>{classItem.className}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

