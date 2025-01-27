const mongoose = require('mongoose');        // require mongoose

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/my_database";  // mongodb url

const databaseconnect = () => {
    mongoose
        .connect(MONGODB_URL)
        .then((conn) => console.log(`Connected to DB: ${conn.connection.host}`))
        .catch((err) => console.log(err.message));
}                      // for database connect

module.exports = databaseconnect;   // for comsuming anywhere


// alg alg environment me alg alg configaration use karne ke liye || third party setup ke liye hum env ka use karte hai