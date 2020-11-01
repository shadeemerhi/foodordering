# Foodood

Foodood is a full stack web application that allows users to place orders at a single restaurant. Both the restaurant and the user are notified and updated via text message through Twilio's SMS API. It was a group midterm project, and my contribution was heavily focussed on front- and back-end development. I also created the design using Adobe XD.

## Tech Stack

Front-end: JavaScript, CSS, HTML5, jQuery, Sass, Bootstrap <br/>
Back-end: Node.js, Express, EJS, PostgresSQL


## Final Product

![Customer ordering page with an empty order]()
![Customer ordering page with items in the order]()
![Customer confirmation prompt]()
![Customer order confirmation page showing order summary]()
![Customer order history page showing the new order with a status of pending]()
![Text message received by the restaurant with order details via Twilio's SMS API]()
![Restaurant/admin page showing the new order - restaurant can specify a pickup time]()
![Text message received by the customer with the specified pickup time via Twilio's SMS API]()
![Customer order history page updated with pickup time specified by the restaurant]()
![After customer pickup, restaurant can close the order, moving it into the 'Closed Orders' section]()
![Customers are able to re-order previous orders directly from their order history page]()


## Dependencies

- Express
- Node.js
- dotenv
- Node-postgres
- Node-postgres-native
- Morgan
- Chalk
- body-parser
- ejs
- Node-sass-middleware


## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `npm start` command.

