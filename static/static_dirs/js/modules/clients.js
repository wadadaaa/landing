/* jshint undef: true, unused: true */
/* global define: false */
define(['jquery', 'owl'], function($, Owl) {

	// Selector
	var S = {
		clients: $('.clients')
	};

	// Main component
	var Component = {
		init: function() {

			S.clients.each(function() {
				var config = $(this).data('config');

				$(this).owlCarousel(config);
			});

		}
	}

	Component.init();
});