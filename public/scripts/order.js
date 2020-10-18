$(document).ready(function() {





  const createOrderItem = function(item) {
    // console.log(item);
    const $orderItem =
    `<div class="container ml-auto align-middle">
        <div class="row order-item text-center">
          <div class="col-4 item-element">
            <input type="number" id="item-quantity" name="item-quantity" min="0" max="20">
          </div>
          <div class="col-4 item-element">
            <p>${item.name}</p>
          </div>
          <div class="col-4 item-element">
            <button type="button" class="btn">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>`;
    return $orderItem;
  }

  const addButtons = $addButtons = $('.add-item-btn');
  console.log(addButtons);

  // Adding click event listeners to all 'add item' buttons to add to order
  // $(addButtons).each(function(event) {
  $(addButtons).on('click', function (event) {
    // $(this).parent().parent().parent().remove();
    const name = $(this).parent().parent().children('.item-info').children('.item-name').html().trim();
    const desc = $(this).parent().parent().children('.item-info').children('.item-description').html().trim();
    const price = $(this).parent().parent().children('.item-info').children('.item-price').html().trim();

    const item = {
      name,
      desc,
      price
    }
    console.log(item);

    const $newItem = createOrderItem(item);
    $('.order-item-container').prepend($newItem);
    console.log($newItem);
    console.log($('.order-item-container'));
  });
  // });


  // console.log(addButtons[0].parents('.container').parents('.row'));


  // $addButtons.on('click', function() {
  //   const
  // });
  // Adding click event listeners to each 'add item' button
  // $('.add-item-btn').on('click', function(event) {

  // });





});
