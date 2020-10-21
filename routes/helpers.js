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

const unique = (value, index, self) => {
  return self.indexOf(value) === index
}


const groupItemsByOrder = function(orderData) {

  let orderIds = [];
  for (const item of orderData) {
    orderIds.push(item.id);
  }

  const uniqueOrderIds = orderIds.filter(unique);

  let index = 0;
  let output = [];
  for (let i = 1; i < uniqueOrderIds.length+1; i++) {
    output[i] = {};
    output[i].id = i;
    output[i]['items'] = [];
    output[i]['quantity'] = [];
    output[i]['item_price'] = [];
    output[i]['total_price'] = null;
    output[i]['status'] = null;
    output[i]['created_at'] = null;
    output[i]['user_id'] = null;
    output[i]['pickup_time'] = null;

    for (let j = index; j < orderData.length; j++) {
      if(orderData[j].id !== i) {
        index = j;
        break
      } else {
        output[i]['items'].push(orderData[j].name);
        output[i]['quantity'].push(orderData[j].quantity);
        output[i]['item_price'].push(orderData[j].price/100);
        output[i]['total_price'] = orderData[j].total_price;
        output[i]['user_id'] = orderData[j].user_id;
        output[i]['status'] = orderData[j].status;
        output[i]['created_at'] = orderData[j].created_at;
        output[i]['pickup_time'] = orderData[j].time;
      }
    }
  }
  return output.slice(1).reverse();
}

const groupOrdersByStatus = function(orders) {
  let newOrders = [];
  let confirmedOrders = [];
  let closedOrders = [];

  for (const order of orders) {
    if (order.status === 'new') {
      newOrders.push(order);
    } else if (order.status === 'confirmed') {
      confirmedOrders.push(order);
    } else {
      closedOrders.push(order);
    }
  }

  return [newOrders, confirmedOrders, closedOrders];
}

module.exports = { groupItemsByCategory, getOrderTotal, createQueryValues, getOrderMessage, groupItemsByOrder, groupOrdersByStatus };
