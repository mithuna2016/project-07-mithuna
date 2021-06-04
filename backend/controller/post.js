const post = require("../module/post");
const pool = require("../database");
var fs = require('fs');

exports.addPost = (req, res, next) => {
   // req.body.post = JSON.parse(req.body.post);
    const url = req.protocol + '://' + req.get('host');
    //get the data from frontend
    const userID = req.body.userID
    const message = req.body.message
    const image = url + '/images/' + req.file.filename
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
    pool.query('SELECT * FROM public."postDB"', (error, results) => {
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
