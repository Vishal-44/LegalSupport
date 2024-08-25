const {Router} = require('express')
const { login, register, logout } = require('../controller/authController')
const { validateAuthorization } = require('../middleware/authMiddleware')

const router = Router()

router.route("/register").post(register)
router.route("/login").post( login)
router.route("/logout").get(validateAuthorization, logout)

module.exports = router