import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'; // Import routes
import connectDB from './config/db.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); //middleware to accept request from diff origins
app.use(bodyParser.json()); //enable to parse incomming json data from body or client request
app.use('/api/users', userRoutes); //setting routes for server usage

// Connect to MongoDB
connectDB()

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
