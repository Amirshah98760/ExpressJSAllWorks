const mongoose = require('mongoose');
require("dotenv").config();

const connectDb = async () =>{
   try{
 await mongoose.connect('mongodb://localhost:27017');
 console.log('Mongodb connected successfully');
   }
   catch(err){
console.error('Error occured ', err);
   }
}

module.exports = connectDb;