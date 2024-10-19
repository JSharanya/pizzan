import express from 'express';
import mongoose from 'mongoose';

const app = express();

const uri = 'mongodb+srv://user123:user123@pizzan-web.oyzrf.mongodb.net/?retryWrites=true&w=majority&appName=pizzan-web'; // Add your database name instead of <dbname>

mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})


