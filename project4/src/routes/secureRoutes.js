

const express = require('express');
const router = express.Router();
const secureController = require('../controllers/secureController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, secureController.secureEndpoint);

module.exports = router;
