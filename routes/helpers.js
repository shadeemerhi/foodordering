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
}

module.exports = { groupItemsByCategory };
