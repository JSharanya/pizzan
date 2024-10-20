import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import cookieParser from "cookie-parser";


import authRoutes from './routes/auth.routes.js'
import adminRoutes from './routes/admin.rotes.js';
import menuRoutes from './routes/menu.routes.js';

dotenv.config();


const app = express();

app.use(cors())
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes)
app.use('/api/menu',menuRoutes)
app.use('/admin', adminRoutes);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})