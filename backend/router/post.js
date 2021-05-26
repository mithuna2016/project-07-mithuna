const express = require('express');
const router = express.Router();


const auth = require('../middleware/auth');
const mulImg = require('../middleware/multer-config');

const postCtrl = require('../controller/post');

router.post('/', postCtrl.addPost);
router.get('/',  postCtrl.getPost);
//router.post('/:id/read', auth, postCtrl.readPost);


module.exports = router;