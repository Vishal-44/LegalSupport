

exports.getUserDetails = async(req, res, next) => {
    if(!req.user){
        return res.status(400).json({status : false, message : 'Cannot get user details.'})
    }
    return res.status(200).json({success : true, username : req.user.username, message : "User details fetching is successfull"})
}