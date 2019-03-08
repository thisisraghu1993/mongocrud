// let Video = require('../models/Video');
exports.age = 234;
/**
 * Get all Videos
 * @param req
 * @param res
 * @returns void
 */
exports.getVideos = function(req, res) {
  console.log('allVideosapi');
  global.VideoInfo
  .find()
  .then(function(allVideos) {
    console.log('allVideos'+allVideos);  
    res.json({
      status: 200,
      allVideos
    })
  })
  .catch(function(err) {

  });
}

/**
 * Save a Video
 * @param req
 * @param res
 * @returns void
 */
exports.addVideo = function(req, res) {
  // if (!req.body.Video.name || !req.body.Video.title || !req.body.Video.global.VideoInfo) {
  //   res.status(403).end();
  // }

  const newVideo =  {
                      title: 'Waka waka',
                      duration: 900,
                      videoURL: '',
                      thumbnailURL: ''
                    };
  console.log('req.body.VideoInfo'+JSON.stringify(req.body.video))
  global.VideoInfo
  .create(req.body.video)
  .then(function(vid) {
    console.log('vid'+JSON.stringify(vid));
    res.json({
      status: 200,
      vid
    })
  })
  .catch(function(err) {
    console.log('err'+err);
    res.json({
      status: 2400,
      err
    })
  });
  // newVideo.save((err, saved) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   }
  //   res.json({ Video: saved });
  // });
}

/**
 * Get a single Video
 * @param req
 * @param res
 * @returns void
 */
exports.getVideo = function(req, res) {
  global.VideoInfo
  .findOne({ cuid: req.params.cuid })
  .then(function(docs) {})
  .catch(function(err) {});
  // Video.findOne({ cuid: req.params.cuid }).exec((err, Video) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   }
  //   res.json({ Video });
  // });
}

/**
 * Delete a Video
 * @param req
 * @param res
 * @returns void
 */
exports.deleteVideo = function(req, res) {
  global.VideoInfo
  .findOne({ cuid: req.params.cuid })
  .then(function(docs) {})
  .catch(function(err) {});
  // Video.findOne({ cuid: req.params.cuid }).exec((err, Video) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   }

  //   Video.remove(() => {
  //     res.status(200).end();
  //   });
  // });
}