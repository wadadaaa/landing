/* jshint undef: true, unused: true */
/* global define: false */
define(['jquery', 'owl'], function($, Owl) {

	// Selector
	var S = {
		testimonials: $('.quotes')
	};

	// Main component
	var Component = {
		init: function() {

			S.testimonials.each(function() {
				var config = $(this).data('config');

				$(this).owlCarousel(config);
			});

		}
	}

	Component.init();
});