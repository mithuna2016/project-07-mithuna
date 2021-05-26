const pool = require("../database");

exports.createPost = function (message,image,userID){
    return new Promise((resolve,reject)=>{
        console.log('hi');
        pool.query(`INSERT INTO public."postDB"("message", "image","userID")
        VALUES('${message}', '${image}', '${userID}')`, 
        (error, results) => {
            if (error) {
                reject (error)
              }
              resolve(results)
             
        })
    });
}

exports.getAllPost = function (post){
    return new Promise((resolve,reject)=>{
        pool.query('SELECT * FROM  public."postDB"'),
        (error, results) => {
            console.log(results.rows);
            if (error) {
                reject (error)
              }
              resolve(results)
             
        }
    });
    }
