$(document).ready(function() {

  const createOrderItems = function(order_id) {

    let orderItems = [];
    console.log('WE ARE GOING TO REORDER WITH THIS ID', order_id);
    const reorderElement = $(`#${order_id}`);
    const reorderItems = $(reorderElement).find('.item-container');
    console.log('reorderItems :', reorderItems);
    reorderItems.each(function() {
      let item = {};
      const itemID = $(this).attr('value');
      const quantity = $(this).children('.item-quantity').html();
      // console.log('quantity :', quantity);
      let itemCost = $(this).children('.item-cost').html();
      itemCost = itemCost.slice(1,itemCost.length-4);
      // console.log('here is cost', itemCost);
      // console.log('itemCost :', itemCost);
      const totalCost = quantity*itemCost;
      // console.log('total COST', totalCost);
      const itemName = $(this).children('.item-name').html();
      item['dish_id'] = itemID;
      item['total_price'] = totalCost;
      item['quantity'] = quantity;
      item['name'] = itemName;
      orderItems.push(item);
    });
    return orderItems;
  }

  // Adding event listeners to each reorder button
  let reorderId = null;
  $('.reorder-btn').on('click', function() {
    reorderId = $(this).parent().parent().attr('id');
    console.log('reorderId :', reorderId);

  });

  $('#reorder-submit-btn').on('click', function() {
    const order = createOrderItems(reorderId);
    console.log(order);
    const data = JSON.stringify(order);
    $.ajax({
      url: '/users/submit',
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data
    })
    .then(
      $.ajax({
        url: '/checkout',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data
      }).then(window.location.href = '/users/confirmation')
    )
    .catch(e => console.log(e));

  });

});
