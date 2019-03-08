// import { Router } from 'express';
// import * as videoController from '../controllers/video.controller';
// const router = new Router();
let express = require('express');
let videoController = require('../controllers/videoController')
let router = express.Router();

console.log('videoController.getvideos'+JSON.stringify(videoController.getVideos))
// Get all videos
router.route('/all').get(videoController.getVideos);

// Get one video by id
router.route('/:id').get(videoController.getVideo);

// Get update video by id
// router.route('/:id').put(videoController.updateVideo);

// Add a new video
router.route('/').post(videoController.addVideo);

// Delete a video by id
router.route('/:id').delete(videoController.deleteVideo);

module.exports = router;