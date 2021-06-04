const express = require("express");
const bodyParser = require("body-parser");


const userRoutes = require('./router/user');
const postRoutes = require('./router/post');
const { response } = require("express");
const path = require('path');

const app = express();


//connect with image folder


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
  



  
   
       




 
/*app.get("/", function(req, res){

  pool.query('SELECT * FROM public."postDB"', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
     
    })
  });*/

  app.use('/api/post',postRoutes)
  app.use('/api/auth', userRoutes);
  
module.exports=app;