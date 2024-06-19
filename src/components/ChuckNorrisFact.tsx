// src/components/ChuckNorrisFact.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChuckNorrisFact: React.FC = () => {
  const [fact, setFact] = useState<string>('');

  useEffect(() => {
    const fetchFact = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/chuck-norris');
        setFact(response.data.value);
      } catch (error) {
        console.error('Error fetching the Chuck Norris fact', error);
      }
    };

    fetchFact();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Chuck Norris Fact</h1>
      <p>{fact}</p>
    </div>
  );
};

export default ChuckNorrisFact;
