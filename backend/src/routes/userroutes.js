const express= require("express")
const router= express.Router()
const userController= require("../controllers/usercontroller")


router.post("/signup",userController.userRegister)
router.post("/login",userController.loginUser)


module.exports= router