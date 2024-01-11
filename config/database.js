const mongoose = require('mongoose');
require('dotenv').config()

const DatabaseUrl = process.env.DATABASE_URL;

const Database = async() =>{
    await mongoose.connect(DatabaseUrl)
    .then(()=> console.log("DB connected"))
    .catch((err)=>{
        console.error(err)
    })
}

module.exports = Database;