$(function () {
  var $inputs = $('.ftooltip .ftooltip__txt');

  $inputs.on('mousemove', function() {
			  var $tips = $(this).siblings('.ftooltip__tips');
			  $tips.show();
  })
        .on('mouseleave', function() {
			  var $tips = $(this).siblings('.ftooltip__tips');
			  $tips.hide();
  });
});