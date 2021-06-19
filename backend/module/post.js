const pool = require("../database");

exports.createPost = function (userID,message,image){
    return new Promise((resolve,reject)=>{
        
        pool.query(`INSERT INTO public."postDB"("userID","message", "image")
        VALUES('${userID}','${message}', '${image}')`, 
        (error, results) => {
            if (error) {
                reject (error)
              }
              resolve(results)
              console.log(results);
        })
    });
}

exports.addRead = function (userID,postID){
    return new Promise((resolve,reject)=>{
        
        pool.query(`INSERT INTO public."post-read"("userID","postID")
        VALUES('${userID}','${postID}')`, 
        (error, results) => {
            if (error) {
                reject (error)
              }
              resolve(results)
              console.log(results);
        })
    });
}
