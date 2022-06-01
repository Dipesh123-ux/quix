const express = require('express');
const router = express.Router();

const {getQuestions,postQuestions} = require('../controllers/quiz')

router.get('/questions',getQuestions);
router.post('/questions',postQuestions);

module.exports = router