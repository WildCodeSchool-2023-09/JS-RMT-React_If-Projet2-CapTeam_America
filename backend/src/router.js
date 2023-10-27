const express = require("express");

const router = express.Router();
const client = require("../database/client");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Route to get a list of superhero
router.get("/superheros", (req, res) => {
  client
    .query("SELECT * FROM superhero")
    .then((result) => res.status(200).json(result))
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// Route to get a specific item by ID
// router
//   .get("/items/:id", (req, res) => {
//     res.send("Hello World!");
//   })
//   .then((result) => res.status(200).json(result[0]))
//   .catch((error) => {
//     console.error(error);
//     res.sendStatus(500);
//   });

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
