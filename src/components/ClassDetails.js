import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ClassDetails = ({ data }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const classData = data.find(item => item.id === parseInt(id));

    if (!classData) {
        return <div>Class not found</div>;
    }

    const handleRedeem = () => {
        navigate(`/class/${id}/redeem`);
    };

    const handleDetails = () => {
        navigate(`/class/${id}/details`);
    };

    const handleLeaderboard = () => {
        navigate(`/class/${id}/leaderboard`);
    };

    return (
        <div className="class-details">
            <h1>{classData.className}</h1>
            
            <div className="points-container">
                <div className="available-points">
                    <h2>Available Points</h2>
                    <p>{classData.availablePoints}</p>
                    <button onClick={handleRedeem}>Redeem</button>
                </div>
                
                <div className="total-points">
                    <h2>Total Points</h2>
                    <p>{classData.totalPoints}</p>
                    <button onClick={handleDetails}>Details</button>
                </div>
            </div>
            
            <div className='leaderboard-button-det'>
                <button onClick={handleLeaderboard} className="leaderboard-button">View Leaderboard</button>
            </div>
        </div>
    );
};

export default ClassDetails;

