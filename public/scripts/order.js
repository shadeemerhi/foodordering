$(document).ready(function() {

  const addButtons = $addButtons = $('.add-item-btn');
  console.log(addButtons);

  const createOrderItem = function(item) {
    console.log(item);
    const $orderItem =
    ``;
  }

  // Adding click event listeners to all 'add item' buttons to add to order
  $(addButtons).each(function(index) {
    $(this).on('click', function () {
      // $(this).parent().parent().parent().remove();
      const name = $(this).parent().parent().children('.item-info').children('.item-name').html().trim();
      const desc = $(this).parent().parent().children('.item-info').children('.item-description').html().trim();
      const price = $(this).parent().parent().children('.item-info').children('.item-price').html().trim();
      console.log('name', name);
      console.log('desc', desc);
      console.log('price', price);

      const item = {
        name,
        desc,
        price
      }

      const $orderItem = createOrderItem(item);

    });



  });


  // console.log(addButtons[0].parents('.container').parents('.row'));


  // $addButtons.on('click', function() {
  //   const
  // });
  // Adding click event listeners to each 'add item' button
  // $('.add-item-btn').on('click', function(event) {

  // });





});
