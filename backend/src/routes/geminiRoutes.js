// routes/gemini.js
const express= require("express")
const {generateTopic}= require('../controllers/geminiController')
const router = express.Router();

router.post('/generate', generateTopic);

module.exports= router
