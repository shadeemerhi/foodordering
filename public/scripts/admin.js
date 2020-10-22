$(document).ready(function() {

  const confirmed = $('.confirmed-order-container');
  // console.log('new-orders', newOrders.length);
  if (confirmed.length === 0) {
    $('#new-order-icon').toggleClass('live');
  }

  // Add event listener to submit button to POST time to DB and Twilio
  $('.button-container').on('change', '#time-input', function() {

    const completionTime = this.value;
    $(this).attr('value', `${completionTime}`);
    $(this).blur();
    // console.log('completionTime :', completionTime);
    const orderId = $(this).parent().parent().parent().parents().find('.new-order')[0].id;
  })

  $('#admin-submit-btn').on('click', function() {
    let orderId = $(this).parent().parent().parent().find('.new-order')[0].id;
    let inputTime = $(this).parent().find('#time-input')[0].attributes.value.nodeValue;
    const data = {id: orderId, time: inputTime};
    const completionTime = {time: inputTime};
    console.log('completionTime :', completionTime);

    $.ajax({
      url: '/users/admin/confirm',
      type: 'POST',
      dataType: 'json',
      data
    })
    .then(
      $.ajax({
        url: '/checkout/admin',
        type: 'POST',
        dataType: 'json',
        data: completionTime
      }).then(window.location.href = '/users/admin').catch(e => console.log(e))
    )
    .catch(e => console.log(e));
  });


  // Adding event listeners to 'Close Order' buttons to change the status to closed
  $('.confirmed-order-container').on('click', function() {
    let orderId = $(this).attr('id');
    const data = {id: orderId};
    $.ajax({
      url: '/users/admin/close',
      type: 'POST',
      dataType: 'json',
      data
    }).then(window.location.href = '/users/admin').catch(e => console.log(e));
  });
});
