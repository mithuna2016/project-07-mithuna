const pool = require("../database");
const bcrypt = require('bcrypt');

exports.createUser = function (firstName,lastName,userEmail,password){
 // console.log(firstName,lastName,userEmail,password);
    return new Promise((resolve,reject)=>{
        pool.query(`INSERT INTO public."userDB"(  "firstName", "lastName", "userEmail","userPassword")
        VALUES('${firstName}', '${lastName}', '${userEmail}','${password}')`,
        (error, results) => {
            if (error) {
              reject (error)
            }
            resolve(results)
           
          })
       
    })

    
}
