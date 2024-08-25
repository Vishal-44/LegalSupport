const User = require('../model/userModel.js')
const bcrypt = require('bcrypt')


exports.register = async (req, res, next) => {
  console.log(req.body);
  try {
    const { name, username, password } = req.body;

    if (!(name && username && password)) {
      return res.status(400).json({
        message: 'Insufficient data.',
        success: false,
      });
    }

    const existingUser = await User.findOne({username});
    if (existingUser) {
      return res.status(400).json({
        message: 'User already exists with this credentials.',
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      username,
      password: hashedPassword,
    });

    await user.save();

    // Generate token
    const jwtToken = user.getJWTToken(process.env.JWT_EXPIRY, process.env.JWT_SECRET_KEY);

    res.status(201).cookie('jwtToken', jwtToken, {
      maxAge: parseInt(process.env.COOKIE_EXPIRY) * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: 'strict',
    }).json({
      message: 'User Registered.',
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error occurred during registration' });
  }
};

exports.login  = async (req, res, next) => {
    console.log(req.body)
    try {
        const {username, password} = req.body
        if(!(username && password))
        {
            return res.status(400).json({success : false, message : "Insufficient Data."})
        }
        let user = await User.findOne({username})

        if(!user) {
            return res.status(400).json({
                message : 'User not found.',
                success : false
            })
        }

        const isPasswordMatch = await user.comparePassword(password, user.password)
        if(!isPasswordMatch) { 
            return res.status(400).json({
            message : 'Incorrect credentials.',
            success : false
        })
        }

        //generate jwt token
        const jwtToken = user.getJWTToken(process.env.JWT_EXPIRY,process.env.JWT_SECRET_KEY)
        res.status(200).cookie('jwtToken',
                                jwtToken, {
                                    maxAge : process.env.COOKIE_EXPIRY*24*60*60*1000, 
                                    httpsOnly : true, 
                                    sameSite : 'strict'
                                }).json ({
                                    message : 'User Logged in.',
                                    success: true,
                                })
    }
    catch(error) {
        console.log(error)
    }
}


exports.logout = async(req, res, next)=>{
try {
  res.clearCookie('jwtToken')
  return res.status(200).json({success : true, message : 'Cookie cleared'})
} catch (error) {
  console.log(error)
  return res.status(400).json({success : false, message : 'Internal error.'})
}
}