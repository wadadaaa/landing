/* jshint undef: true, unused: true */
/* global define: false */
define(['jquery', 'domReady', 'modules/reveal', 'browser', 'velocity', 'inview', 'placeholder'], function($, domReady, Reveal, bowser){
	"use strict";

	var Component = {

		init: function () {
			this.bindUiActions();
		},

		bindUiActions: function () {
			if (bowser.msie || bowser.firefox) {
				$('html').addClass('no-parallax');
			}

			if (bowser.msie) {
				$('*').css('background-attachment', 'scroll');
			}

			domReady(function () {
				Reveal.init();
				Component.hidePreloader();
			});
		},
		hidePreloader: function () {
			$('.preloader-block').velocity({
				translateY: ['-100%', '0'],
				translateZ: '0'
			}, 1000, 'ease', function () {
				$(window).trigger('pageLoaded');
			});

			if ($('video.cover-el').length) {
				$('video.cover-el').trigger('play');

				$('.volume-toggle').click(function() {
					$(this).toggleClass('pe-7s-volume2 pe-7s-volume1');
					var v = $('video.cover-el');
					v.prop('muted', !v.prop('muted'));
				});
			}
		}
	};

	Component.init();
});