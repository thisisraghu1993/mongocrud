let Post = require('../models/post');

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getPosts(req, res) {
  Post.find().sort('-dateAdded').exec((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts });
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addPost(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  const newPost = new Post(req.body.post);
  newPost.title = sanitizeHtml(newPost.title);
  newPost.name = sanitizeHtml(newPost.name);
  newPost.content = sanitizeHtml(newPost.content);

  newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = cuid();
  Content
  .create(newPost)
  .then(function(docs) {})
  .catch(function(err) {});
  // newPost.save((err, saved) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   }
  //   res.json({ post: saved });
  // });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getPost(req, res) {
  Content
  .findOne({ cuid: req.params.cuid })
  .then(function(docs) {})
  .catch(function(err) {});
  // Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   }
  //   res.json({ post });
  // });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deletePost(req, res) {
  Content
  .findOne({ cuid: req.params.cuid }).
  .then(function(docs) {})
  .catch(function(err) {});
  // Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   }

  //   post.remove(() => {
  //     res.status(200).end();
  //   });
  // });
}