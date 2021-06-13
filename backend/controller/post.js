const post = require("../module/post");
const pool = require("../database");
var fs = require('fs');

exports.addPost = (req, res, next) => {
    console.log(req.file);
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
    pool.query('SELECT * FROM public."postDB", public."userDB" where public."postDB".userID=public."userDB".userID'
, (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
       
      })
   /* post.getAllPost()
        .then(
            (result) => {
                console.log(result.rows);
                res.status(200).json();
            }
        ).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );*/
}
