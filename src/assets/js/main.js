;(function(window, document, $) {
	var $win = $(window);
	var $doc = $(document);
	var winH = $win.height();

	// Animate Function
	function animate(winST) {
		$('.animations').each(function(){
			if (winST + winH * 0.9 > $(this).offset().top) {
				var $this = $(this);
				var animClass = $this.data('animation');

				if ( !$this.hasClass('animated') ) {
					$this.addClass( 'animated' );
					$this.addClass( animClass );
				}
			}
		});
	};

	$('.btn--open-members').on('click', function(event) {
		$('.section--team').addClass('visible');

		$([document.documentElement, document.body]).animate({
			scrollTop: $("#team-section").offset().top
		}, 1000);

		event.preventDefault();
	});

	$('.btn--close-members').on('click', function(event) {
		$('.section--team').removeClass('visible');

		$([document.documentElement, document.body]).animate({
			scrollTop: 0
		}, 500);

		event.preventDefault();
	});

	$('.btn--аccept-cookies').on('click', function(event) {
		$('.footer__bar').addClass('hidden-bar');

		event.preventDefault();
	});

	$('.btn-close-bar').on('click', function(event) {
		$('.footer__bar').addClass('hidden-bar');

		event.preventDefault();
	});

	//Window load event
	$win.on('load scroll', function () {
		var winST = $win.scrollTop();
		animate(winST);
	});
})(window, document, window.jQuery);
