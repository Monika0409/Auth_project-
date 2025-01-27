const mongoose = require('mongoose');     // require mongoose
const { Schema } = mongoose;      // create schema using mongoose
const JWT = require('jsonwebtoken');  // require JWT token
const bcrypt = require('bcrypt');     // require bcrypt 

const userSchema = new Schema({
    name: {
        type : String,
        require : [true, 'user name is Required'],
        minLength : [5, 'Name must be at least 5 char'],
        maxLength : [50, 'Name must be less than 50 char'],
        trim : true
    },
    email: {
        type : String,
        require : [true, 'user email is required'],
        unique : true,
        lowercase : true,
        unique : [true, 'already registered']
    },
    password: {
        type : String,
        select : false
    },
    forgotPasswordToken: {
        type : String,
    },
    forgotPasswordExpiryDate: {
        type : Date,
    }
}, {
    timestamps: true
});

userSchema.pre('save', async function(next) {       // we use custom middleware  in this pre method is used
    if(!this.isModified('password')){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    return next();
})

userSchema.method = {
    jwtToken() {
        return JWT.sign(       // method of JWT token
            {id: this._id, email:this.email},  // data 
            process.env.SECRET,                // secret token
            { expiresIn: '24h'}                // for expirying token
        )
    }
}                      // we define custome method for it

const userModel = mongoose.model('user', userSchema);   // create model using mongoose  (database collection is user  and data of collection is in form of schema)
module.exports = userModel;    //  exports userModel