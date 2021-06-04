
const bcrypt = require('bcrypt');
const userFunc = require("../module/user");
const pool = require("../database");
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
  //get the data from frontend
  const userEmail = req.body.userEmail
  const password = req.body.password
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  let hashedPassword = ""
  //hash password
   bcrypt.hash(password, 10,(err,result)=>{
    if(err) {
      return res.status(500).json({"Error":err})
    }
    else
    {
      hashedPassword = result;
    }
  });
  //check the email

  pool.query(
    `SELECT * FROM  public."userDB"
        WHERE "userEmail" = $1`,
    [userEmail],
    (err, results) => {
      if (err) {
        console.log(err);
      }

      if (results.rowCount > 0) {
        res.status(403).json({
          'Message': "Already exists"
        })
      }
      //email is not exists create the new user and add to DB
      else {
        userFunc.createUser(firstName, lastName, userEmail, hashedPassword)
          .then(
            () => {
              console.log(firstName, lastName, userEmail, hashedPassword);
              res.status(201).json({
                message: 'User added successfully!'
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

    })
};

exports.login = (req, res, next) => {
  const userEmail = req.body.userEmail;
  const password = req.body.password;
console.log(password);
  pool.query(`SELECT * FROM public."userDB"
    WHERE "userEmail" = '${userEmail}'`
    ,
    (err, results) => {
      if (err) {
        console.log(err);
      }
      console.log(results.rows);
      if (results.rowCount > 0) {
        bcrypt.compare(password, results.rows[0].userPassword).then(
          (valid) => {
            console.log(valid);
            if (!valid) {
              return res.status(401).json({
                error: new Error('Incorrect password!')
              });
            }
            console.log(results.rows[0].userId );
            const token = jwt.sign(
              { userId: results.rows[0].userId },
              'Lorem_ipsum_dolor_sit_amet',
              { expiresIn: '24h' }
            );
            console.log("hiiii");
            res.status(200).json({
              userId: results.rows[0].userId,
              token: token
            });
          }
        )
        .catch(
                (error) => {
                  res.status(500).json({
                    error: error
                  });
                }
              );
      }
    }
  )
  //     .then(
  //       (user) => {

  //         if (!user) {
  //           return res.status(401).json({
  //             error: new Error('User not found!')
  //           });
  //         }
  //         bcrypt.compare(password, user.password).then(
  //           (valid) => {
  //             if (!valid) {
  //               return res.status(401).json({
  //                 error: new Error('Incorrect password!')
  //               });
  //             }
  //             const token = jwt.sign(
  //               { userId: user._id },
  //               'Lorem_ipsum_dolor_sit_amet',
  //               { expiresIn: '24h' }
  //             );
  //             res.status(200).json({
  //               userId: user._id,
  //               token: token
  //             });
  //           }
  //         ).catch(
  //           (error) => {
  //             res.status(500).json({
  //               error: error
  //             });
  //           }
  //         );
  //       }
  //     ).catch(
  //       (error) => {
  //         res.status(500).json({
  //           error: error
  //         });
  //       }
  //     );
}




