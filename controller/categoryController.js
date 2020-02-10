const { db } = require("./../connection");

module.exports = {
  getCategory: (req, res) => {
    var sql = `select * from categories`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send({ status: "error" });
      res.status(200).send(result);
    });
  },
  addCategory: (req, res) => {
    var { nama } = req.body;
    var sql = `INSERT INTO categories SET ?`;
    var data = {
      nama
    };
    db.query(sql, data, (err, result) => {
      if (err) res.status(500).send({ message: "Insert error" });
      res.status(200).send({ message: "Insert Category Berhasil", result });
    });
  },
  updateCategory: (req, res) => {
    const id = req.params.id;
    var { nama } = req.body;
    var data = {
      nama
    };
    var sql = `UPDATE categories SET ? WHERE id= ${id}`;
    db.query(sql, data, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  deleteCategory: (req, res) => {
    //   Pake Constraint
    //   ALTER TABLE `movieindoxxi`.`movcat`
    //   ADD CONSTRAINT `fk_movcat_idcategory`
    //   FOREIGN KEY (`idcategory`)
    //   REFERENCES `movieindoxxi`.`categories` (`id`)
    //   ON DELETE CASCADE
    //   ON UPDATE CASCADE;
    const id = req.params.id;
    var sql = `DELETE FROM categories WHERE id=${id}`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  }
};
