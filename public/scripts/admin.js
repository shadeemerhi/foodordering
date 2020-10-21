$(document).ready(function() {
  console.log('hi');


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
    // console.log('order id', orderId);
    const data = {id: orderId};
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
});
