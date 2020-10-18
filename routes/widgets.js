/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {

    let query = `SELECT * FROM dishes;`;
    db.query(query)
      .then(data => {
        const dishes = data.rows;
        console.log(dishes);
        templateVars = {
          dishes
        }
        res.render('menu', templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get('/submit', (req, res) => {
    res.render('index');
  });
  return router;
};
