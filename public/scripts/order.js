$(document).ready(function() {

  const createOrderItem = function(item) {
    const $orderItem =
    `<div class="container ml-auto align-middle" value=${item.id}>
        <div class="row order-item text-center">
          <div class="col-4 item-element">
            <input type="number" id="item-quantity" value="1" name="item-quantity" min="1" max="20">
          </div>
          <div class="col-4 item-element">
            <p class="item-name-text" >${item.name}</p>
          </div>
          <div class="col-4 item-element">
            <div class="row d-flex">
              <p class="item-price-text">${item.price}</p>
              <button type="button" class="btn remove-item-btn">
              <i class="fas fa-minus-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </div>`;
    return $orderItem;
  }

  const addButtons = $('.add-item-btn');

  // Adding click event listeners to all 'add item' buttons to add to order
  $(addButtons).on('click', function (event) {
    const name = $(this).parent().parent().children('.item-info').children('.item-name').html().trim();
    const desc = $(this).parent().parent().children('.item-info').children('.item-description').html().trim();
    const price = $(this).parent().parent().children('.item-info').children('.item-price').html().trim();
    const id = $(this).parent().parent().parent()[0].id;

    const item = {
      name,
      id,
      price
    }

    console.log($('.order-item').length);
    if ($('.order-item').length !== 0) {
      if (!checkOrderForItem(name)) {
        console.log(checkOrderForItem(name))
        const $newItem = createOrderItem(item);
        $('.order-item-container').prepend($newItem);
        updatePrice();
      } else {
        alert('Item Already Added to Order!');
      }
    } else {
      const $newItem = createOrderItem(item);
      $('.order-item-container').prepend($newItem);
    }
  });

  // Adding event listeners to each 'remove' button to remove items from order
  $('.order-item-container').on('click', '.remove-item-btn', function () {
    $(this).parent().parent().parent().parent().remove();
    updatePrice();
  });

  // Getting the value of the quantity input from the user
  $('.order-item-container').on('change', '#item-quantity', function() {
    $(this).keypress(function(event) {
      const keyCode = event.keyCode;
      if(keyCode === 13) {
        $(this).blur();
      }

    });
    const quantity = this.value;
    $(this).attr('value', `${quantity}`);
    $(this).blur();
    updatePrice();
  });

  $('.checkout-btn').on('click', function() {
    const total = updatePrice();
  });

  // Checks if the item being added to the order is already in the order
  const checkOrderForItem = function(selectedItem) {
    const orderItemElements = $('.order-item');
    let result = false;
    $(orderItemElements).each(function() {
      const tempItem = $(this).find('.item-name-text').html().trim();
      if (tempItem === selectedItem) {
        console.log('her');
        result = true;
      }
    });
    return result;
  }

  const updatePrice = function() {

    const orderItemElements = $('.order-item');
    let totalCost = 0;
    $(orderItemElements).each(function() {
    let itemCost = $(this).find('.item-price-text').html();
    let quantity = $(this).find('#item-quantity')[0].attributes.value.nodeValue;
    itemCost = parseFloat(itemCost.slice(1));

    // REMEMBER TO INCLUDE TAX
    // totalCost += 1.05*quantity*itemCost;
    totalCost += quantity*itemCost;
    });

    const totalElement = $('#order-total');
    totalElement.html(`$${(Math.round(totalCost * 100) / 100).toFixed(2)}`);
  }

});
