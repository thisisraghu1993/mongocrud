// import { Router } from 'express';
// import * as playlistController from '../controllers/playlist.controller';
// const router = new Router();
let express = require('express')
let router = express.Router();
// Get all playlists
router.route('/playlists').get(playlistController.getplaylists);

// Get one playlist by id
router.route('/playlists/:id').get(playlistController.getplaylist);

// Get update playlist by id
router.route('/playlists/:id').put(playlistController.updateplaylist);

// Add a new playlist
router.route('/playlists').playlist(playlistController.addplaylist);

// Delete a playlist by id
router.route('/playlists/:id').delete(playlistController.deleteplaylist);

export default router;