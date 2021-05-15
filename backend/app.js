const express = require("express");
const bodyParser = require("body-parser");
var multer  = require('multer')

//const multer = require('./middleware/multer-config');
let upload = multer({ dest: 'uploads/' })
const { response } = require("express");
const path = require('path');
const pool = require("./database");
const app = express();
const multMid = require('../backend/middleware/multer-config')

//connect with image folder

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.get("/login", function(req, res){
console.log('all done');
pool.query('SELECT * FROM public."userDB"', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
   
  })
   
   
   });


   app.post("signup", function(req, res){
        
    pool.query(`INSERT INTO public."userDB"("firstName", "lastName", "userEmail","userPassword")VALUES('${req.body.firstName}', '${req.body.lastName}', '${req.body.userEmail}','${req.body.password}')`, (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results)
       
      })
   
       

});

app.post("/",multMid.single('image'), function(req, res){
  console.log(req.file);
    pool.query(`INSERT INTO public."postDB"("message", "image","userID")VALUES('${req.body.message}', '${req.file.path}', '${req.body.userid}')`, (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results)
       
      })
});
 
app.get("/", function(req, res){

  pool.query('SELECT * FROM public."postDB"', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
     
    })
  });
 
  

  
module.exports=app;