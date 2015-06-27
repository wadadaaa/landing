/* jshint undef: true, unused: true */
/* global define: false */
define(['jquery', 'browser', 'underscore', 'waitforimages', 'shuffle'], function($, bowser, _) {

	// Selector
	var S = {
		portfolio: $('.portfolio'),
		filter: $('.portfoliofilters'),
		filterbuttons: $('.portfoliofilters .portfoliofilter')
	};

	// Main component
	var Portfolio = {
		init: function() {
			if (bowser.msie) {
				var transform = false;
			} else {
				var transform = true;
			}

			S.portfolio.waitForImages(function() {
			    S.portfolio.shuffle({
			    	itemSelector: '.item',
			    	sizer: S.portfolio.find('.sizer'),
			    	supported: transform
			    });
			});

			
			$(window).resize(_.debounce(function(){
				S.portfolio.shuffle('update');
			}, 1000));

			S.filterbuttons.on('click', function() {
				if ( ! $(this).hasClass( 'active' ) ) {
					var group = $(this).data('group');

					S.filter.find('.active').removeClass('active');
					$(this).addClass('active');
					S.portfolio.shuffle( 'shuffle', group );
				}
			});
		}
	}

	Portfolio.init();
});