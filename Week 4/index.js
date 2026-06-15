const express = require('express');
const app = express();
const PORT = process.env.PORT;
const connectDb = require('./config/connectDB');
app.use(express.json());









async function startServer() {
  try {
      await connectDb;
    app.listen(PORT, (req,res)=>{
        console.log(`The server is listening on port ${PORT}`);
    })
  } catch (error) {
    console.error('Error ', error.message);
  }
}

startServer();