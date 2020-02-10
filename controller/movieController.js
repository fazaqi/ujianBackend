const { db } = require("./../connection");

module.exports = {
  getMovie: (req, res) => {
    var sql = `select * from movies`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send({ status: "error" });
      res.status(200).send(result);
    });
  },
  addMovie: (req, res) => {
    var { nama, tahun, description } = req.body;
    var sql = `INSERT INTO movies SET ?`;
    var data = {
      nama,
      tahun,
      description
    };
    db.query(sql, data, (err, result) => {
      if (err) res.status(500).send({ message: "Insert error" });
      res.status(200).send({ message: "Insert Berhasil", result });
    });
  },
  updateMovie: (req, res) => {
    console.log(req.body);
    const id = req.params.id;
    var { nama, tahun, description } = req.body;
    var data = {
      nama,
      tahun,
      description
    };
    var sql = `UPDATE movies SET ? WHERE id= ${id}`;
    db.query(sql, data, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  deleteMovie: (req, res) => {
    // Pake Constraint
    // ALTER TABLE `movieindoxxi`.`movcat`
    // ADD CONSTRAINT `fk_movcat_idmovie`
    // FOREIGN KEY (`idmovie`)
    // REFERENCES `movieindoxxi`.`movies` (`id`)
    // ON DELETE CASCADE
    // ON UPDATE CASCADE;

    const id = req.params.id;
    var sql = `DELETE FROM movies WHERE id=${id}`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  }
};
