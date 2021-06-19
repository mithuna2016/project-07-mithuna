const post = require("../module/post");
const pool = require("../database");
var fs = require('fs');

exports.addPost = (req, res, next) => {

  //get the data from frontend
  const userID = req.body.userID
  const message = req.body.message
  const image = req.file.path
  //console.log(userID,message,image);
  post.createPost(userID, message, image)
    .then(
      () => {
        res.status(201).json({
          message: 'New post added to database successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      }
    );
}
exports.getPost = (req, res, next) => {

  pool.query('SELECT *FROM public."postDB" ',
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)

    })

};

exports.readPost = (req, res, next) => {
  console.log(req.body.userID, req.body.postID);
  const userID = req.body.userID;
  const postID = req.body.postID;



  post.addRead(userID, postID)
    .then(
      () => {
        console.log(userID, postID);
        res.status(201).json({
          message: 'Read post added successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      });

}
exports.getReadPost = (req, res, next) => {
  const userID = req.params.id
  pool.query(`SELECT *FROM public."post-read" WHERE "userID" = $1`,
  [userID],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)

    })

};