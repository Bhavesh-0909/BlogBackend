const express = require('express');
const app = express();
const routes = require('./router/Post');
const Database = require('./config/database')

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`);
})

app.use('/api/v1', routes);

Database();