var msg = 'Hola Mundo!';
console.log(msg);

const express = require('express');
const app = express();
const auth = require('./routes/auth');

app.use(express.json());
app.use('/api', auth);