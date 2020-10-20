const groupItemsByCategory = function(dishes) {
  let apps = [];
  let mains = [];
  let desserts = [];

  for (const dish of dishes) {
    if (dish.category === 'Appetizer') {
      apps.push(dish);
    } else if(dish.category === 'Main') {
      mains.push(dish);
    } else {
      desserts.push(dish);
    }
  }
  return [apps, mains, desserts];
};

const getOrderTotal = function(orderItems) {

  let total = 0;
  orderItems.forEach(item => {
    total += item.total_price;
  });

  return total;
};

const createQueryValues = function(order_id, orderItems) {
  let queryInsert = `INSERT INTO orderItems(order_id, dish_id, total_price, quantity) VALUES `;

  for (let i = 0; i < orderItems.length; i++) {

    let tempValue = '';
    if (i !== orderItems.length - 1) {
      tempValue = ` (${order_id}, ${orderItems[i].dish_id}, ${orderItems[i].total_price}, ${orderItems[i].quantity}), `;
    } else {
      tempValue = ` (${order_id}, ${orderItems[i].dish_id}, ${orderItems[i].total_price}, ${orderItems[i].quantity});`;
    }
    queryInsert += tempValue;
  }
  return queryInsert;
}

// [ { dish_id: '3', total_price: 3, quantity: '1', name: 'Calamari' },
//   { dish_id: '2', total_price: 3, quantity: '1', name: 'Poke Bowl' } ]

const getOrderMessage = function(orderItems) {

  let orderMessage = '';
  for (let i = 0; i < orderItems.length; i++) {
    if (i !== orderItems.length - 1) {
      itemString = `${orderItems[i].quantity} ${orderItems[i].name}, `;
    } else {
      itemString = `${orderItems[i].quantity} ${orderItems[i].name}`;
    }
    orderMessage += itemString;
  }
  return orderMessage;
}

module.exports = { groupItemsByCategory, getOrderTotal, createQueryValues, getOrderMessage };
