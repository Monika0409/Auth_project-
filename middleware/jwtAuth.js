const JWT = require('jsonwebtoken');       // require jsonwebtoken

const jwtAuth = (req, res, next) => {
    const token = (req.cookies && req.cookies.token) || null;   // take token from cookie

    if(!token){
        return res.status(400).json({
            success : false,
            message : 'Not authorized'
        })
    }

    try {
        const payload = JWT.verify(token, process.env.SECRET);    // verify token
        req.user = {id : payload.id, email:payload.email };

    } catch (e) {
        return res.status(400).json({
            success : true,
            message : e.message
        })
    }
    next();    // from one process to another process i can go simltanously
}

module.exports = jwtAuth;     // for use in other