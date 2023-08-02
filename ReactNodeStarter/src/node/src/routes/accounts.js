const express = require('express');
const router = express.Router();
const axios = require('axios');
const authService = require('../utils/authService');

router.get('/', async (req, res, next) => {
  try {
    const accessToken = await authService.getAccessToken();
    const response = await axios.get('https://dynamics365url/api/data/v9.0/accounts', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
