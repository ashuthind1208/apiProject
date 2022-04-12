const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


const app = express();
dotenv.config()

//Connect DB
mongoose.connect(
    process.env.DB_CONNECT,
    () => console.log('Connected to DB')
)


//Import route
const authRoute = require('./Routes/auth');


//MIDDLEWARES
app.use(express.json());
app.use('/api/user',authRoute);




app.listen(3000,()=>{console.log('Server up and running')});