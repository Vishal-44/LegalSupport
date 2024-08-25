const {Router} = require('express')
const { getUserDetails } = require('../controller/userController')
const { validateAuthorization } = require('../middleware/authMiddleware')

const router = Router()
router.route("/get-user-details").get(validateAuthorization, getUserDetails)

module.exports = router