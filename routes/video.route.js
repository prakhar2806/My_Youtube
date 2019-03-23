const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const video_controller = require('../controllers/video.controller');
const search_controller = require('../controllers/search.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', video_controller.test);

router.post('/addVideo', video_controller.addVideo);

router.get('/getAllVideos',video_controller.getAllVideos);

router.get('/:id', video_controller.getOneVideo);

router.post('/search',search_controller.search);

module.exports = router;