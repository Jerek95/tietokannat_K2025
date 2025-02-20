const db = require('../database');

const login={
  checkPassword: function(kayttajatunnus, callback) {
      return db.query('SELECT salasana FROM user WHERE kayttajatunnus = ?',[kayttajatunnus], callback); 
    }
};
          
module.exports = login;