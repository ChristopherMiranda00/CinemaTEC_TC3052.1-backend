require('./models/User');
require('./models/List');
require('./models/Movie');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/listRoutes');
const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(authRoutes);
app.use(trackRoutes);
app.use(movieRoutes);
app.use(userRoutes);

// MongoDB
const mongoUri = 'mongodb+srv://admin:cinema@cinematec.4x0pf.mongodb.net/Movies?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB instance');
});
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB instance', err)
}); 

app.get('/', (req, res) => {
    res.send(`Bienvenid@ a la API de CinemaTEC!`);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Listening on port 8080');
});
