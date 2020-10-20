// /*
//  * All routes for Widgets are defined here
//  * Since this file is loaded in server.js into api/widgets,
//  *   these routes are mounted onto /widgets
//  * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
//  */

// const express = require('express');
// const router  = express.Router();
// const { groupItemsByCategory, getOrderTotal, createQueryValues } = require('./helpers');

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

//   // items on server: [ { dish_id: '4', total_price: 3, quantity: '1', name: 'Thai soup' },
//   // { dish_id: '3', total_price: 3, quantity: '1', name: 'Soup' } ]

//   // router.post('/submit', (req, res) => {
//   //   const orderItems = req.body;
//   //   // console.log(JSON.parse(orderItems));
//   //   console.log('items on server:', orderItems);
//   //   const orderTotal = getOrderTotal(orderItems);
//   //   let query =
//   //   `INSERT INTO orders (user_id, total_price)
//   //   VALUES (${1}, ${orderTotal})
//   //   RETURNING *;`

//   //   return db.query(query)
//   //   .then(objectNew => {
//   //     const order_id =  objectNew.rows[0];
//   //     console.log(order_id);
//   //     // let query2 = createQueryValues(order_id, orderItems);
//   //     // db.query(query2)
//   //     // .then(() => console.log('orderItems inserted into database'))
//   //     // .catch(e => console.log(e));
//   //   })
//   //   .catch(e => console.log(e));

//   //   // res.send('post reached');

//   //   // redirect to /confirmation with order data (ideally)
//   //   // res.render('/confirmation', orderData)
//   // });



//   router.get('/confirmation', (req, res) => {

//   })
//   return router;
// };
