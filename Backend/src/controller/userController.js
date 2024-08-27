const { run } = require("../Summarizer")
const pdfParse = require('pdf-parse');

exports.getUserDetails = async(req, res, next) => {
    if(!req.user){
        return res.status(400).json({status : false, message : 'Cannot get user details.'})
    }
    return res.status(200).json({success : true, username : req.user.username, message : "User details fetching is successfull"})
}

exports.summarize = async(req, res, next) => {
    const {buffer} = req.file
    try {
        const text2Summarize = (await pdfParse(buffer)).text
        // we need to parse the pdf
        const resJsonObj = await run(text2Summarize)
        resJsonObj.success  = true
        resJsonObj.message = "summarized the text"
        return res.status(200).json(resJsonObj)

    } catch (error) {
        console.log(error)
        return res.status(400).json({success : false, message : "Internal Error"})
    }
}
