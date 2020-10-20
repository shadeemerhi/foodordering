/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const { groupItemsByCategory, getOrderTotal, createQueryValues } = require('./helpers');

module.exports = (db) => {

  router.get("/order", (req, res) => {

    let query = `SELECT * FROM dishes;`;
    db.query(query)
      .then(data => {
        const dishes = data.rows;
        const groupedDishes = groupItemsByCategory(dishes);
        // console.log(dishes);
        templateVars = {
          apps: groupedDishes[0],
          mains: groupedDishes[1],
          desserts: groupedDishes[2]
        }
        res.render('menu', templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // router.get('/submit', (req, res) => {
  //   res.render('index');
  // });


  router.post('/submit', (req, res) => {

    const orderItems = req.body;
    const orderTotal = getOrderTotal(orderItems);
    let query =
    `INSERT INTO orders (user_id, total_price)
    VALUES (${1}, ${orderTotal})
    RETURNING *;`

    return db.query(query)
    .then(objectNew => {
      const order_id =  objectNew.rows[0].id;
      // console.log(order_id);
      let query2 = createQueryValues(order_id, orderItems);
      console.log(query2);
      db.query(query2)
      .then(() => res.send('orderItems inserted into database'))
      .catch(e => console.log(e));
    })
    .catch(e => console.log(e));

    // res.redirect('/users/confirmed');

    res.send('hello');
    // redirect to /confirmation with order data (ideally)
    // res.render('/confirmation', orderData)
  });



  router.get('/admin', (req, res) => {

    const query =
    `SELECT orders.id, dishes.name, orders.total_price FROM orders
      JOIN orderItems ON order_id = orders.id
      JOIN dishes ON orderItems.dish_id = dishes.id;`;

      db.query(query)
      .then(data => {
        const orderDetails = data.rows;
        // console.log(orders);
        templateVars = {
          orderDetails
        };
        res.render('admin', templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

  });

  router.get('/confirmed', (req, res) => {
    console.log('we are in confirmed');
    res.render('confirmed');
  });
  return router;
};
