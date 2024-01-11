const express = require('express');
const app = express();
const routes = require('./router/Post');
const Database = require('./config/database');
require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`);
})

app.get('/', (req, res)=>{
    res.send('server started')
})

app.use('/api/v1', routes);

Database();