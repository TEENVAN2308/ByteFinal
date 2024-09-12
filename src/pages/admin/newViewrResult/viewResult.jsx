import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls

const TeamScores = () => {
  // State to hold the team data
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch data from the API
  const fetchTeamData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://byte-0dmt.onrender.com/api/teams'); // Replace with your API URL
      setTeams(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching team data');
      setLoading(false);
    }
  };

  // useEffect to call the fetch function when the component mounts
  useEffect(() => {
    fetchTeamData();
  }, []);

  // Inline styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    width: '300px',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const teamNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
  };

  const scoreStyle = {
    fontSize: '16px',
    color: 'black',
  };

  // Render loading, error, or the actual team scores
  return (
    <div style={containerStyle}>
      <h1>Team Scores</h1>
      {
        console.log("teams",teams)
      }
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && teams.length > 0 ? (
        teams.map((team) => (
          <div key={team._id} style={cardStyle}>
            <div style={teamNameStyle}>{team.teamName}</div>
            <div style={scoreStyle}>Score: {team.score}</div>
          </div>
        ))
      ) : (
        !loading && <p>No teams found</p>
      )}
    </div>
  );
};

export default TeamScores;
