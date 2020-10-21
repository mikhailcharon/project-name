const express = require("express");
const router = express.Router();
/* GET a list of locations */
router.get("/", function (req, res, next) {
  // get the database connection from the app
  const knex = req.app.get("db");
  return knex
    .select("*")
    .from("locations")
    .then((data) => {
      res.render("locations", { cities: data });
    });
});
module.exports = router;