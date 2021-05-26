const post = require("../module/post");
const pool = require("../database");


exports.addPost = (req, res, next) => {
    console.log(req.body);
    //get the data from frontend
    const userID = req.body.userID
    const message = req.body.message
    const image = req.file.path

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
    post.getAllPost(post)
        .then(
            (result) => {
                res.status(200).json(result.rows);
            }
        ).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
}
