const { db } = require("./../connection");

module.exports = {
  getMovie: (req, res) => {
    var sql = `select * from product`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send({ status: "error" });
      res.status(200).send(result);
    });
  },
  addMovie: (req, res) => {
    // console.log(req.body);
    var { storeName, productName, productPrice } = req.body;
    var sql = `INSERT INTO store SET ?`;
    var data = {
      storeName
    };
    db.query(sql, data, (err, result) => {
      //   console.log(err);
      if (err) res.status(500).send({ message: "Insert error" });
      //   res.status(200).send({ message: "Insert Berhasil", result });
      console.log(result);
      sql = `INSERT INTO product SET ?`;
      data = {
        storeId: result.insertId,
        productName,
        productPrice
      };
      db.query(sql, data, (err, result2) => {
        console.log(err);
        if (err)
          res.status(500).send({ message: "Insert ke Table product Error" });
        res.status(200).send({ message: "Insert ke product Berhasil" });
      });
    });
  },
  updateMovie: (req, res) => {
    const userId = req.params.id;
    var { storeName } = req.body;
    var data = {
      storeName
    };
    var sql = `UPDATE store SET ? WHERE id= ${userId}`;
    db.query(sql, data, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  deleteMovie: (req, res) => {
    const userId = req.params.id;
    var sql = `DELETE FROM store WHERE id=${userId}`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  }
};
