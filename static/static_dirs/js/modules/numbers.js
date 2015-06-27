/* jshint undef: true, unused: true */
/* global define: false */
define(['jquery', 'odometer', 'inview'], function(){
	"use strict";

	var Numbers = {

		init: function () {
			this.bindUiActions();
		},

		bindUiActions: function () {
			$('.odometer').each(function() {
				var number = $(this).html();
				$(this).html('0');

				$(this).one('inview', function () {
					$(this).animateNumbers(number, false, 2000);
				});
			});
		}
	};

	Numbers.init();
});