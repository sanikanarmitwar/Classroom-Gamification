// src/components/Details.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Details = ({ data }) => {
    const { id } = useParams();
    const classData = data.find(item => item.id === parseInt(id));

    if (!classData) {
        return <div>Class not found</div>;
    }

    return (
        <div className="details">
            <h1>{classData.className} - Task Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>Task Description</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {classData.tasks.map(task => (
                        <tr key={task.taskdesc}>
                            <td>{task.taskdesc}</td>
                            <td>{task.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Details;
