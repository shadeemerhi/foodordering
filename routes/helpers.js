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

module.exports = { groupItemsByCategory, getOrderTotal };
