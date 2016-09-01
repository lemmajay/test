var $links = $('.items li a')
var $blocks = $('.include li');
$links.on('click', function(){
  if(!$(this).hasClass('active')){
    $links.removeClass('active');
    $blocks.removeClass('active');
    $(this).addClass('active');
    $blocks.eq($(this).data('target')).addClass('active');
  }
});
