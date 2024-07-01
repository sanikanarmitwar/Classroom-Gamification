import React from 'react';
import { useParams } from 'react-router-dom';

const Leaderboard = ({ data }) => {
    const { id } = useParams();
    const classData = data.find(item => item.id === parseInt(id));

    if (!classData) {
        return <div>Class not found</div>;
    }

    const sortedStudents = [...classData.students].sort((a, b) => b.points - a.points);

    return (
        <div className="leaderboard">
            <h1>{classData.className} - Leaderboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Roll Number</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedStudents.map((student, index) => (
                        <tr key={student.id} className={student.isCurrentUser ? 'current-user' : ''}>
                            <td>{index + 1}</td>
                            <td>{student.Rollno}</td>
                            <td>{student.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
