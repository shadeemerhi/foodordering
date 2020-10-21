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
    const orderId = $(this).parent().parent().parent().find('.new-order')[0].id;
    const completionTime = $(this).parent().find('#time-input')[0].attributes.value.nodeValue;
    // console.log('completionTime :', completionTime);
    // console.log('order id', orderId);
  });
});
