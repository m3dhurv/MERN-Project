const jwt = require("jsonwebtoken");

const generateToken = (user) =>{
    const secret = process.env.JWT_KEY || 'fallback-jwt-secret-key';
    return jwt.sign({ email: user.email, id: user._id}, secret)
}

module.exports.generateToken = generateToken;
