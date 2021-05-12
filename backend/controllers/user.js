const db = require("../modules/user");
const User = db.userDB;
const Op = db.Sequelize.Op;

const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
   
    bcrypt.hash(req.body.password, 10).then(
      (hash) => {
        const newUser = new user({
          email: req.body.email,
          password: hash
        });
       
      newUser.save().then(
          () => {
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
     
    );
    console.log('all good');
  };




  exports.login = (req, res, next) => {
    user.findOne({ email: req.body.email }).then(
      (user) => {
        if (!user) {
          return res.status(401).json({
            error: new Error('User not found!')
          });
        }
        bcrypt.compare(req.body.password, user.password).then(
          (valid) => {
            if (!valid) {
              return res.status(401).json({
                error: new Error('Incorrect password!')
              });
            }
            const token = jwt.sign(
                {userId:user._id},
                'my_name_is_sarasvin_i_am_4_yeras_old',
                {expiresIn:'24h'}
            );
            res.status(200).json({
              userId: user._id,
              token: token
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
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      }
    );
  }