const { db } = require("./../connection");

module.exports = {
  getMovcat: (req, res) => {
    var sql = `SELECT m.nama as 'Nama Movies', c.nama as 'Nama Category' 
                FROM movies m 
                JOIN movcat mc ON m.id=mc.idmovie 
                JOIN categories c ON c.id=mc.idcategory `;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send({ status: "error" });
      res.status(200).send(result);
    });
  },
  addMovcat: (req, res) => {
    var { idmovie, idcategory } = req.body;
    var sql = `INSERT INTO movcat SET ?`;
    var data = {
      idmovie,
      idcategory
    };
    db.query(sql, data, (err, result) => {
      if (err) res.status(500).send({ message: "Insert Movcat error" });
      res.status(200).send({ message: "Insert Movcat Berhasil", result });
    });
  },
  deleteMovcat: (req, res) => {
    let { idmovie, idcategory } = req.body;
    var sql = `DELETE FROM movcat WHERE idmovie=${idmovie} AND idcategory=${idcategory}`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  }
};
