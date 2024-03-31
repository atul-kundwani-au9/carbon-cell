

const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const secureRoutes = require('./routes/secureRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/secure', secureRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
