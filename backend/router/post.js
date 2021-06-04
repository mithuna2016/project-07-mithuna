const express = require('express');
const router = express.Router();


const auth = require('../middleware/auth');
const multermid = require('../middleware/multer-config');

const postCtrl = require('../controller/post');

router.get('/',postCtrl.getPost);
router.post('/',multermid, postCtrl.addPost);

//router.post('/:id/read', auth, postCtrl.readPost);


module.exports = router;