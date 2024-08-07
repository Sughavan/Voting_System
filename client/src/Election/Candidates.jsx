import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Candidates.css';

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get('https://retoolapi.dev/w5ywqM/data');
        setCandidates(response.data);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchCandidates();
  }, []);

  const handleVoteClick = () => {
    navigate('/details'); 
  };

  return (
    <div className="container">
      <h1>Candidates List</h1>
      {candidates.map((candidate, index) => (
        <div key={index} className='candidates'>
          <h2 className='nam'>{candidate.id}  {candidate.CandidateName}</h2>
          <p className='detail'>Party: {candidate.party}</p>
          <p className='detail'>Age: {candidate.age}</p>
          <p className='detail'>State: {candidate.state}</p>
        </div>
      ))}
      <button className='buttonvote' onClick={handleVoteClick}>Vote</button>
    </div>
  );
}

export default Candidates;
