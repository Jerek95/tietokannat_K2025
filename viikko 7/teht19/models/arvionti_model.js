const db = require('../database');

const arvionti = {
  getAll: function(callback) {
    return db.query('select * from arvionti', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from arvionti where idArvionti=?', [id], callback);
  },
  add: function(arvionti, callback) {
    return db.query(
      'insert into arvionti (paivamaara,arvosana,idOpiskelija,idOpintojakso) values(?,?,?,?)',
      [arvionti.paivamaara, arvionti.arvosana, arvionti.idOpiskelija, arvionti.idOpintojakso],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arvionti where idArvionti=?', [id], callback);
  },
  update: function(id, arvionti, callback) {
    return db.query(
      'update arvionti set paivamaara=?,arvosana=?, idOpiskelija=?, idOpintojakso=? where idArvionti=?',
      [arvionti.paivamaara, arvionti.arvosana, arvionti.idOpiskelija, arvionti.idOpintojakso, id],
      callback
    );
  }
};
module.exports = arvionti;