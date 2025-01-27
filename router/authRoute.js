const express = require('express');     // require expree
const { signup, signin, getUser, logout } = require('../controller/authController');
const jwtAuth = require('../middleware/jwtAuth')
const authRouter = express.Router();         // router ch instance

authRouter.post('/signup', signup);    // it take path and controller       create entity-post
authRouter.post('/signin', signin);    // for signin
authRouter.get('/user', jwtAuth ,getUser)  // for get the user info
authRouter.get('/logout', jwtAuth, logout)

module.exports = authRouter;       // for use anywhere