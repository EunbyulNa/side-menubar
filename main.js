$(function () {
  var nn= 300;
  $('.ham_box').on('mouseover',function() {

    $('.ee').css({'transform':'rotate(0deg)'},nn);
    $('#sidebar').css( {'flex':'7%', 'max-width':'7%'}, nn);

  }).on('mouseout', function () {
    $('.ee').css( {'transform':'rotate(-90deg)'})
    $('#sidebar').css( {'flex':'5%', 'max-width':'5%'});
  })

  $('.ham_box').on('click', function () {

    $('.openMenu').css({'display':'block'});
    $('.menus').css({'display':'none'});
    $('.ham_box').css({'display':'none'});

  $('#sidebar').css( {'padding': '120px'});
  $('#mainbox').css({'opacity': '.5'});
$('body').css( {'padding':'35px'})


  })
});
