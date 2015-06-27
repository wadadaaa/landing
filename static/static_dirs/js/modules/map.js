/* jshint undef: true, unused: true */
/* global define, google: false */
define(['jquery','modules/mapStyles', 'velocity'], function($, MapStyles){
	'use strict';

	var Map = {
		init: function() {
			if ($('#map-block').length) {
				this.createMap();
			}

			$('.js-map-toggle').click(function() {
				if (!$('.changing-map').length) {
					var map = $('.js-map-wrapper'),
						fa = $('.js-map-btn [class*="pe-7s"]');

					if (map.hasClass('active')) {
						Map.state.off(fa, map);
					} else {
						Map.state.on(fa, map);
					}
				}
			});
		},

		state: {
			on: function (btn, map) {
				btn.removeClass('pe-7s-map-marker').addClass('pe-7s-close');
				map.addClass('changing-map');

				map.addClass('active').velocity('stop').velocity({
					translateY: ['0', '-100%']
				}, 500, 'ease', function () {
					map.removeClass('changing-map');
				});
			},
			off: function (btn, map) {
				btn.removeClass('pe-7s-close').addClass('pe-7s-map-marker');
				map.addClass('changing-map');

				map.velocity('stop').velocity({
					translateY: ['-100%', '0']
				}, 500, 'ease', function () {
					map.removeClass('active changing-map');
				});
			}
		},

		createMap: function () {
			var	mapBlock = document.getElementById('map-block');
			var myLatlng = new google.maps.LatLng($(mapBlock).data('lon'), $(mapBlock).data('lat'));
			
			var	mapOptions = {
			      	zoom: 15,
					center: myLatlng,
			      	mapTypeId: google.maps.MapTypeId.ROADMAP,
			      	styles: MapStyles
				};

			var	map = new google.maps.Map(mapBlock, mapOptions);

			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map
			});

			google.maps.event.addListenerOnce(map, 'idle', function(){
				$('.js-map-wrapper').hide();
			});
		}
	};

	Map.init();
});