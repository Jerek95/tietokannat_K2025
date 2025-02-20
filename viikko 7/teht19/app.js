var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./database');
const bcrypt = require('bcryptjs');
const basicAuth = require('express-basic-auth');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var opiskelijaRouter = require('./routes/opiskelija');
var opintojaksoRouter = require('./routes/opintojakso');
var arviontiRouter = require('./routes/arvionti');
var userRouter = require('./routes/user');
var loginRouter = require('./routes/login');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/opintojakso', opintojaksoRouter);
app.use('/arvionti', arviontiRouter);

app.use(basicAuth( { authorizer: myAuthorizer, authorizeAsync:true, } ))
app.use('/opiskelija', opiskelijaRouter);
app.use('/user', userRouter);
app.use('/login', loginRouter);


function myAuthorizer(kayttajatunnus, salasana,cb){
    db.query('SELECT salasana FROM user WHERE kayttajatunnus = ?',[kayttajatunnus], 
      function(dbError, dbResults, fields) {
        if(dbError){
              response.json(dbError);
            }
        else {
          if (dbResults.length > 0) {
            bcrypt.compare(salasana,dbResults[0].salasana, 
              function(err,res) {
                if(res) {
                  console.log("success");
                  return cb(null, true);
                }
                else {
                  console.log("wrong salasana");
                  return cb(null, false);
                }			
                response.end();
              }
            );
          }
          else{
            console.log("user does not exists");
            return cb(null, false);
          }
        }
      }
    );
  }

module.exports = app;
