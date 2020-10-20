const unique = (value, index, self) => {
  return self.indexOf(value) === index
}

const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
const uniqueAges = ages.filter(unique)

console.log(uniqueAges);


const groupItemsByOrder = function(orderData) {

  let nums = [];
  for (const item of orderData) {
    nums.push(item.id);
  }

  const uniqueNums = nums.filter(unique);


  let index = 0;
  let output = [];
  for (let i = 1; i < uniqueNums.length+1; i++) {
    output[i] = {};
    output[i].id = i;
    output[i]['items'] = [];
    output[i]['quantity'] = [];
    output[i]['total_price'] = null;
    output[i]['status'] = null;
    for (let j = index; j < orderData.length; j++) {
      if(orderData[j].id !== i) {
        index = j;
        break
      } else {
        output[i]['items'].push(orderData[j].name);
        output[i]['quantity'].push(orderData[j].quantity);
        output[i]['total_price'] = orderData[j].total_price;
        output[i]['status'] = orderData[j].status;
      }
    }
  }
  return output;
}

const orderData = [  { id: 1, name: 'Soup', quantity: 1, total_price: 21, status: true },
  {
  id: 1,
  name: 'Calamari',
  quantity: 5,
  total_price: 21,
  status: true },
  {
  id: 1,
  name: 'Poke Bowl',
  quantity: 1,
  total_price: 21,
  status: true },
  { id: 2, name: 'Soup', quantity: 1, total_price: 8, status: true },
  { id: 2, name: 'Steak', quantity: 1, total_price: 8, status: true },
  { id: 3, name: 'Soup', quantity: 1, total_price: 18, status: true },
  {
  id: 3,
  name: 'Poke Bowl',
  quantity: 4,
  total_price: 18,
  status: true },
  {
  id: 3,
  name: 'Calamari',
  quantity: 1,
  total_price: 18,
  status: true },
  {
  id: 4,
  name: 'Calamari',
  quantity: 1,
  total_price: 18,
  status: true },
  {
  id: 4,
  name: 'Hamburger',
  quantity: 1,
  total_price: 18,
  status: true },
  {
  id: 4,
  name: 'Steak',
  quantity: 1,
  total_price: 18,
  status: true },
  {
  id: 4,
  name: 'Pizza',
  quantity: 1,
  total_price: 18,
  status: true },
  { id: 5, name: 'Soup', quantity: 1, total_price: 9, status: true },
  {
  id: 5,
  name: 'Poke Bowl',
  quantity: 1,
  total_price: 9,
  status: true },
  {
  id: 5,
  name: 'Calamari',
  quantity: 1,
  total_price: 9,
  status: true },
  {
  id: 6,
  name: 'Poke Bowl',
  quantity: 1,
  total_price: 6,
  status: true },
  {
  id: 6,
  name: 'Calamari',
  quantity: 1,
  total_price: 6,
  status: true },
  { id: 7, name: 'Soup', quantity: 1, total_price: 11, status: true },
  {
  id: 7,
  name: 'Poke Bowl',
  quantity: 1,
  total_price: 11,
  status: true },
  {
  id: 7,
  name: 'Pizza',
  quantity: 1,
  total_price: 11,
  status: true },
  { id: 8, name: 'Pie', quantity: 14, total_price: 14, status: true } ]



let data = groupItemsByOrder(orderData);
data = data.slice(1);
console.log('new stuff', data);


  // SELECT orders.id, dishes.name, orderItems.quantity, orders.total_price, status FROM orders
  //     JOIN orderItems ON order_id = orders.id
  //     JOIN dishes ON orderItems.dish_id = dishes.id
  //     ORDER BY order_id;
