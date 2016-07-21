$(document).ready(function () {
  for (var i = 0; i < 2528; i++) {
    $('#canvas').append('<div class="emptyBox"></div>');
  };

  var currentColor;

  $('#palete > div').click(function () {
    currentColor = $(this).css('background-color');
    console.log(currentColor);
    $('#currentColor').css('background-color', currentColor);
  });

  var isDown = false;

  $('#canvas > div').mousedown(function() {
      isDown = true;
    });
  $('#canvas > div').mouseup(function() {
      isDown = false;
    });

  $("#canvas > div").mouseover(function() {
      if(isDown) {
        $(this).css('background-color', currentColor);
      }
    });

  $('#canvas > div').click(function() {
    $(this).css('background-color', currentColor);
  });

  // $('#canvas > div').hover(function () {
  //   $(this).mousedown(function () {
  //     $(this).css('background-color', 'red')
  //   })
  // })
  // if($('#canvas > div').hover(function(){return true}) == true){
  //   console.log('test');
  // }
})
