const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require('./routes/user');
const { response } = require("express");
const path = require('path');
const client = require("./database");
const app = express();


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
//connect with image folder
  app.use('/images', express.static(path.join(__dirname, 'images')));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());


app.get("/", function(req, res){
console.log('all done');
    const query = `
    SELECT * FROM public."userDB"
   `;
   
   client.connect()
   
       .then((client) => {
           client.query(query)
               .then(res => {
                   for (let row of res.rows) {
                    
                       console.log(row,"hello");
                   }
               })
               .catch(err => {
                   console.error(err);
               });
       })
       .catch(err => {
           console.error(err);
       });
   
    
   
   });
   
    
 
   app.use('/api/auth', userRoutes);

module.exports=app;