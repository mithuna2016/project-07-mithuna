const multer = require('multer');
const { ClientBase } = require('pg');
const MIME_TYPE={
    'image/jpg':'jpg',
    'image/jpeg':'jpeg',
    'image/png':'PNG',

};

const storage = multer.diskStorage({
    destination:(req,File,callback)=>{
        callback(null,'images');
    },
    filename:(req,file,callback)=>{
        const name =file.originalname.split('').join('_');
        //const extention = MIME_TYPE[File.mimetype];
        callback(null,name+Date.now());
    }
    
});
module.exports= multer({storage:storage});