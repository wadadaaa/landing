/* jshint undef: true, unused: true */
/* global define: false */
define(['jquery', 'velocity', 'velocityUi'], function($) {

	// Selector
	var s = {
		navsList: $('.menu ul')
	}

	// Main component
	var Component = {
		init: function() {

			// Clone mobile navs
			this.cloneNavs();

			this.bindToggleBtn();
		},

		bindToggleBtn: function () {
			var menu = $('.js-mobile-menu');

			// Open mobile menu
			$('.js-menu-toggle').click(function(e) {
				e.stopPropagation();
				menu.show().velocity({
					translateY: ['0', '-100%']
				}, 500, 'ease').addClass('is-active');
			});

			$('body').click(function() {
				if (menu.hasClass('is-active')) {
					menu.velocity('reverse', function () {
						menu.hide().removeClass('is-active');
					});
				}
			});
		},

		cloneNavs: function () {
			var $mobileContainer = $('<div class="mobile-menu menu js-mobile-menu">');

			s.navsList.clone().appendTo($mobileContainer);
			$mobileContainer.prependTo('body');

			this.bindNavsAction();
		},

		bindNavsAction: function () {
			var navs = $('.menu a, .js-all-tours');

			navs.each(function() {
				$(this).on('click tap', function(e) {
					e.preventDefault();
					
					var target = $(this).attr('href');

					var distance = $(target).offset().top;

					$('html, body').stop().animate({
					    'scrollTop': distance
					}, 900, 'swing');
				});
			});
		},
	}

	Component.init();
});