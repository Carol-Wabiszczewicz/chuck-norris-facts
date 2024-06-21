import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChuckNorrisFact: React.FC = () => {
  const [fact, setFact] = useState<string>('');
  const [iconUrl, setIconUrl] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    const fetchFact = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/chuck-norris');
        setIconUrl(response.data.icon_url); 
        setFact(response.data.value);
        setCategory(response.data.categories.length > 0 ? response.data.categories[0] : 'Uncategorized');
      } catch (error) {
        console.error('Error fetching the Chuck Norris fact', error);
      }
    };

    fetchFact();
  }, []);

  return (
    <div className="p-4 flex justify-center items-center min-h-screen">
      <div className="max-w-md rounded overflow-hidden shadow-lg p-4 bg-white">
        {iconUrl && <img src={iconUrl} alt="Chuck Norris" className="w-full rounded-t" />}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{category}</div>
          <p className="text-gray-700 text-base">{fact}</p>
        </div>
      </div>
    </div>
  );
};

export default ChuckNorrisFact;
