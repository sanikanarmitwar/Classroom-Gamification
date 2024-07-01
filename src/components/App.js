// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ClassDetails from './ClassDetails';
import Leaderboard from './leaderboard';
import Details from './details';
import Navbar from './Navbar';
import data from './data';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar data={data} />
                <div className="main-content">
                    {/* Removed Sidebar */}
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/class/:id" element={<ClassDetails data={data} />} />
                            <Route path="/class/:id/leaderboard" element={<Leaderboard data={data}  />} />
                            <Route path="/class/:id/details" element={<Details data={data}  />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;

