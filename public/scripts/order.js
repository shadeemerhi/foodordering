$(document).ready(function() {

  $('.dish-container').click(function() {

    // event is happening - class is being toggled, but CSS not updating - might have to do with refreshing the page
    $('.btn').toggleClass('hidden');
  });
});
