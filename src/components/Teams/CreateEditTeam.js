import React, { useState, useEffect } from 'react';

const CreateEditTeam = ({ team, onSave }) => {
    const [name, setName] = useState('');
    const [coach, setCoach] = useState('');

    useEffect(() => {
        if (team) {
            setName(team.name);
            setCoach(team.coach);
        }
    }, [team]);

    const handleSave = () => {
        const updatedTeam = { name, coach };
        onSave(updatedTeam);
    };

    return (
        <div>
            <h2>{team ? 'Edit Team' : 'Create Team'}</h2>
            <div>
                <label>Team Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Coach:</label>
                <input
                    type="text"
                    value={coach}
                    onChange={(e) => setCoach(e.target.value)}
                />
            </div>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default CreateEditTeam;