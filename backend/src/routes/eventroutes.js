const express= require("express")
const router= express.Router()
const eventController= require("../controllers/eventcontroller")
const middleware= require("../middelware/userMiddleware")

router.get("/",eventController.getEvents)
router.post("/create",middleware.verifyToken,middleware.verifyAdmin,eventController.createEvent)
router.delete("/:id",middleware.verifyToken,middleware.verifyAdmin,eventController.eventDelete)
router.patch("/:id",middleware.verifyToken,middleware.verifyAdmin,eventController.updateEvent)


module.exports= router