import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChuckNorrisFact: React.FC = () => {
  const [fact, setFact] = useState<string>('');
  const [iconUrl, setIconUrl] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [translatedFact, setTranslatedFact] = useState<string>('');

  const API_BASE_URL = 'https://api.chucknorris.io/jokes/random';

  useEffect(() => {
    const fetchFact = async () => {
      try {
        const response = await axios.get(API_BASE_URL);
        setIconUrl(response.data.icon_url); 
        setFact(response.data.value);
        setCategory(response.data.categories.length > 0 ? response.data.categories[0] : 'Uncategorized');
        translateFact(response.data.value, selectedLanguage); // Traduzir o fato ao carregar
      } catch (error) {
        console.error('Error fetching the Chuck Norris fact', error);
      }
    };

    fetchFact();
  }, [selectedLanguage]);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  };

  const translateFact = async (text: string, targetLanguage: string) => {
    const apiKey = 'AIzaSyDyYeY1AqHuMzQKA8ZXP7ir2C-QvPb2ncc';
    const endpoint = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    try {
      const response = await axios.post(endpoint, null, {
        params: {
          q: text,
          target: targetLanguage,
        },
      });

      setTranslatedFact(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error('Error translating the fact', error);
    }
  };

  return (

    <div id="box">
    <div id="shape"></div>
    <div id="shape"></div>
    <div id="shape"></div>
    <div id="container">
    <div className="p-4 flex justify-center items-center min-h-screen">
      <div className="max-w-md rounded-lg overflow-hidden shadow-lg p-4 bg-orange-200 bg-opacity-50">
        <div className="flex items-center justify-between mb-4 border-b border-white">
      <select value={selectedLanguage} 
      onChange={handleLanguageChange} 
      className="mb-4 rounded-md border-b-2 border-r-2 text-black "
      >
        <option value="" disabled hidden>CHOOSE LANGUAGE</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="pt-BR">Português (Brasil)</option>
      </select>
      </div>
      <div className="flex items-center">
          {iconUrl && <img src={iconUrl} alt="Chuck Norris" className="w-20 h-20 mr-4" />}
          <p className="text-lg text-white">{translatedFact}</p>
        </div>
      </div>
</div>

</div>
    </div>
  );
};

export default ChuckNorrisFact;
