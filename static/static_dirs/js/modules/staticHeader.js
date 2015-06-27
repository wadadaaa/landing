/* jshint undef: true, unused: true */
/* global define: false */
define(['jquery', 'underscore', 'waitforimages'], function($, _) {

	// Selector
	var S = {
		toggle: $('.headertoggle:visible'),
		header: $('.fixedheader'),
		fixed: $('.fixed-screen'),

	};

	// Main component
	var Header = {

		init: function() {
			$('.js-first-screen').waitForImages(function () {
				if (S.toggle.length) {
					Header.bindToggle();
					Header.hero(true);
				} else {
					Header.hero(false);
				}
				
				$(window).resize(_.debounce(function(){
					if (S.toggle.length) {
						Header.hero(true);
					} else {
						Header.hero(false);
					}
				},500));
			});
		},

		hero: function (full) {
			// Set section height
			var target = $('.js-first-screen'),
				head = $('header').outerHeight(),
				newH = null;

			if (full) {
				newH = $(window).outerHeight();
				target.css('height', newH);
			} else {
				newH = $(window).outerHeight() - head;
				target.css('height', newH);

				if (S.fixed.length) {
					$('header').addClass('fixed-screen-header');
				}
			}

			if (S.fixed.length) {
				$('.sections-container').css('padding-top', $(window).outerHeight());
			}


			if ($('.mainslider').length && $('.owl-item .image', target).length) {
				// Check images size
				$('.owl-item .image', target).each(function() {
					$(this).removeClass('absolute-image');

					var imageHeight = $(this).height();

					if (imageHeight < target.outerHeight()) {
						$(this).addClass('absolute-image');
					}
				});
			} else if ($('.cover-el').length) {
				var thisEl 	= $('.cover-el'),
					elH 	= thisEl.height(),
					pH 		= thisEl.parent().outerHeight();
				thisEl.removeClass('vertical-align');

				if (elH < pH) {
					thisEl.addClass('vertical-align');
				}
			}
		},

		bindToggle: function() {
			S.toggle.click(function(e) {
				e.stopPropagation();
				S.header.toggleClass('active');				
			});

			S.header.click(function(e) {
				e.stopPropagation();
			});

			$('body, .menu a').click(function() {
				S.header.removeClass('active');
			});
		}

	}

	Header.init();
});