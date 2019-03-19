const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const video_controller = require('../controllers/video.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', video_controller.test);

module.exports = router;