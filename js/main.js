
$(function() {
  $('.nav__item_navicon').on('click', function() {
    $('.nav .nav__item:not(.nav__item_navicon)').slideToggle();
  })
});

/*
$(function() {
	$('.tongle').on('click', function() {
		$('.search-form').slideToggle();
	})
});


$(function() {
	$('.globe').on('click', function() {
		$('.social li:not(.globe)').slideToggle();
	})
});
*/