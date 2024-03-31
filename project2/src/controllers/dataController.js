const axios = require('axios');

exports.fetchData = async (req, res) => {
  try {
    const { category, limit } = req.query;
    let apiUrl = 'https://api.publicapis.org/entries';

    // Apply filters if provided
    if (category) {
      apiUrl += `?category=${category}`;
    }
    if (limit) {
      apiUrl += `${category ? '&' : '?'}limit=${limit}`;
    }

    // Fetch data from the public API
    const response = await axios.get(apiUrl);
    const data = response.data;

    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
