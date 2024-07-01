import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome Back!</h1>
            <div className="class-cards">
                {data.map((item) => (
                    <Link key={item.id} to={`/class/${item.id}`} className="class-card-link">
                        <div className="class-card">
                            <h2>{item.className}</h2>
                            <p>Total Points: {item.totalPoints}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
