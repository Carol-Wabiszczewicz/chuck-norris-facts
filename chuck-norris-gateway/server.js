const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cool = require('cool-ascii-faces');
const path = require('path');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());

app.get('/api/chuck-norris', async (req, res) => {
  try {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching Chuck Norris fact', error);
    res.status(500).json({ error: 'Failed to fetch Chuck Norris fact' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
