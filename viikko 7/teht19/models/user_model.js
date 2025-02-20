const db = require('../database');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const user = {
  getAll: function(callback) {
    return db.query('select * from user', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from user where id_user=?', [id], callback);
  },
  add: function(user, callback) {
    bcrypt.hash(user.salasana, saltRounds, function(err, hash) {
        return db.query('insert into user (kayttajatunnus,salasana) values(?,?)',
            [user.kayttajatunnus, hash],callback);
    });  
  },
  delete: function(id, callback) {
    return db.query('delete from user where id_user=?', [id], callback);
  },
  update: function(id, user, callback) {
    bcrypt.hash(user.salasana, saltRounds, function(err, hash) {
        return db.query('update user set kayttajatunnus=?,salasana=? where id_user=?',
            [user.kayttajatunnus, hash, id],callback);
        });
    }
      
};
module.exports = user;