const express = require("express");

const router = express.Router();
const client = require("../database/client");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Route to get a list of superhero

router.get("/superheros", (req, res) => {
  let url = "SELECT * FROM superhero";
  const values = [];

  if (req.query.limit) {
    url += " LIMIT ?";
    values.push(+req.query.limit);
  }

  client
    .query(url, values)
    .then((result) => res.status(200).json(result[0]))
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// Route to get a specific item by ID
router.get("/superheros/:id", (req, res) => {
  const id = +req.params.id;

  client
    .query("select * from superhero where id = ?", [id])
    .then(([superhero]) => {
      if (superhero[0] != null) {
        res.json(superhero[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// // Route to add a new item
// router
//   .post("/items", (req, res) => {
//     res.send("Hello World!");
//   })
//   .then((result) => res.status(200).json(result[0]))
//   .catch((error) => {
//     console.error(error);
//     res.sendStatus(500);
//   });

/* ************************************************************************* */

module.exports = router;
