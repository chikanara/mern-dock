const { register, login, getProfile } = require("../controllers/authCtrl")
const protect = require("../middlewares/auth")
const { registerRules, validator, loginRules } = require("../middlewares/bodyValidator")
const isAuth = require("../middlewares/isAuth")

const router = require("express").Router()


router.post("/register",registerRules(),validator,register)
router.post("/login",loginRules(),validator,login)
router.get("/current",isAuth,protect,getProfile)

module.exports = router