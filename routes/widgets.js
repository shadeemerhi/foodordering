/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

// const express = require('express');
// const router  = express.Router();
// const { groupItemsByCategory } = require('./helpers');

// module.exports = (db) => {
//   router.get("/", (req, res) => {

//     let query = `SELECT * FROM dishes;`;
//     db.query(query)
//       .then(data => {
//         const dishes = data.rows;
//         const groupedDishes = groupItemsByCategory(dishes);
//         // console.log(dishes);
//         templateVars = {
//           apps: groupedDishes[0],
//           mains: groupedDishes[1],
//           desserts: groupedDishes[2]
//         }
//         res.render('menu', templateVars);
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .json({ error: err.message });
//       });
//   });

//   // router.get('/submit', (req, res) => {
//   //   res.render('index');
//   // });


//   router.post('/submit', (req, res) => {
//     const orderItems = req.body;
//     // console.log(JSON.parse(orderItems));
//     console.log('items on server:', orderItems);

//     res.send('post reached');

//     // redirect to /confirmation with order data (ideally)
//     // res.render('/confirmation', orderData)
//   });



//   router.get('/confirmation', (req, res) => {

//   })
//   return router;
// };
