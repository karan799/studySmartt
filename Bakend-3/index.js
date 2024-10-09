const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://kb6789123:karan7206511@cluster0.6qjfwdy.mongodb.net/movies?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const userRoutes = require('./Routes/user');
app.use('/api/users', userRoutes);

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
