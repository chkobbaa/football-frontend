import React, { useEffect, useState } from 'react';
import API from '../api';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    API.get('/matches').then((res) => setMatches(res.data));
  }, []);

  return (
    <div>
      <h2>Upcoming Matches</h2>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            <Link to={`/matches/${match.id}`}>
              {match.location} – {new Date(match.date).toLocaleString()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
