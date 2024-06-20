import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChuckNorrisFactsList: React.FC = () => {
  const [facts, setFacts] = useState<string[]>([]);

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/chuck-norris/facts');
        setFacts(response.data);
      } catch (error) {
        console.error('Error fetching Chuck Norris facts', error);
      }
    };

    fetchFacts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Popular Chuck Norris Facts</h1>
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChuckNorrisFactsList;
