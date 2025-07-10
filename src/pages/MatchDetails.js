import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

function MatchDetails() {
  const { id } = useParams();
  const [match, setMatch] = useState(null);

  useEffect(() => {
    API.get(`/matches/${id}`).then((res) => setMatch(res.data));
  }, [id]);

  const handleJoin = () => API.post(`/matches/${id}/join`).then(() => alert('Joined!'));
  const handlePay = () => API.post(`/matches/${id}/pay`).then(() => alert('Marked as paid!'));

  if (!match) return <p>Loading...</p>;

  return (
    <div>
      <h2>{match.location}</h2>
      <p>{new Date(match.date).toLocaleString()}</p>
      <p>Price: {match.price} TND</p>
      <h3>Participants:</h3>
      <ul>
        {match.participants.map((p) => (
          <li key={p.id}>
            {p.name} {p.has_paid ? '✅' : '❌'}
          </li>
        ))}
      </ul>
      <button onClick={handleJoin}>Join Match</button>
      <button onClick={handlePay}>I Paid</button>
    </div>
  );
}

export default MatchDetails;
