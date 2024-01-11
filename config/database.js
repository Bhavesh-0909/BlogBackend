const mongoose = require('mongoose');

const DatabaseUrl = process.env.DATABASE_URL;

const Database = async() =>{
    mongoose.connect(DatabaseUrl)
    .then(()=> console.log("DB connected"))
    .catch((err)=>{
        console.log(err)
        console.error(err)
    })
}

module.exports = Database;