var $ = require('jquery');

$('#visit').click(function() {
  var url = $('#urlinput').val();

  $('.tab.active').text(url);
  $('.view.active').attr('src', url);
});

$('#newtab').click(function() {
  var url = $('#urlinput').val();

  $('.tab, .view').removeClass('active');

  $('#tabbar').append('<li class="tab active">' + url + '</li>');
  $('#views').append('<webview class="view active" src="' + url + '"></webview>');
});

$('body').on('click', '.tab', function() {
  $('.tab, .view').removeClass('active');

  var index = $(this).index();

  $('.tab').eq(index).addClass('active');
  $('.view').eq(index).addClass('active');
});

