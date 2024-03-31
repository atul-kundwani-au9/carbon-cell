const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger'); 

require('dotenv').config(); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(express.json());

// Routes
const authRoutes = require('./src/routes/authRoutes');
app.use('/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
