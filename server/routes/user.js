const express = require('express');
const router = express.Router();

const {getUserScores , postScore,addUser} = require('../controllers/user')

router.get('/user/:username',getUserScores)
router.post('/user',addUser);
router.post('/user/:username',postScore)

module.exports = router;