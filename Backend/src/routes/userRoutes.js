const {Router} = require('express')
const multer = require('multer');
const { getUserDetails, summarize } = require('../controller/userController')
const { validateAuthorization } = require('../middleware/authMiddleware')

const router = Router()
const upload = multer({ storage: multer.memoryStorage() });
router.route("/get-user-details").get(validateAuthorization, getUserDetails)
router.route("/summarize").post(validateAuthorization, upload.single('file'),summarize)

module.exports = router