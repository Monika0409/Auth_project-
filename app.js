const express = require('express');           // require express
const app = express();                        // import express
const authRouter = require('./router/authRoute');  // requirauthRouter 
const databaseconnect = require('./config/databaseConfig');
const cookieParser = require('cookie-parser');     // require cookieparser
const cors = require('cors');      // require cors

databaseconnect()   // database connect

app.use(express.json());         // for giving json type data
app.use(cookieParser());         // pass the cookie parser
app.use(cors({
    origin : [process.env.CLIENT_URL],
    credentials : true
}))                              // define cors
 
app.use('/api/auth/', authRouter);     // take path and router 

app.use('/', (req, res) => {
    res.status(200).json({data: 'JWTauth server'});
});

module.exports = app;     // for use anywhere


