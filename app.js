const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const mongoose = require('mongoose')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


mongodb.conect(`mongodb+srv://bert4457:leXXGU6nsBvwzK4C@blog.1xfieow.mongodb.net/?retryWrites=true&w=majority&appName=blog`)
 .then(() => console.log('Connected to MongoDB'))
.cath(err => console.error('Failed to connect to MongoDB'))

