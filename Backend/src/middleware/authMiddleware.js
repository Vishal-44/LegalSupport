const jwt = require('jsonwebtoken')

exports.validateAuthorization = (req, res, next) => {
    const {jwtToken} = req.cookies
    console.log(req.cookies)
    if(!jwtToken){
        return res.status(400).json({success : false, message : "No jwt token provided."})
    }
    try{
            const decodedToken = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY)
            req.user = decodedToken.user
            next();
        }
    catch(e) {
        console.log(e)
        return res.status(400).json({succes: false, message:"Internal error"})
    }
}