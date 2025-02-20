const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const login = require('../models/login_model');

router.post('/', 
  function(request, response) {
    if(request.body.kayttajatunnus && request.body.salasana){
      const kayttajatunnus = request.body.kayttajatunnus;
      const salasana = request.body.salasana;
        login.checksalasana(kayttajatunnus, function(dbError, dbResult) {
          if(dbError){
            response.json(dbError);
          }
          else{
            if (dbResult.length > 0) {
              bcrypt.compare(salasana,dbResult[0].salasana, function(err,compareResult) {
                if(compareResult) {
                  console.log("success");
                  response.send(true);
                }
                else {
                    console.log("wrong salasana");
                    response.send(false);
                }			
              }
              );
            }
            else{
              console.log("user does not exists");
              response.send(false);
            }
          }
          }
        );
      }
    else{
      console.log("kayttajatunnus or salasana missing");
      response.send(false);
    }
  }
);

module.exports=router;