require.config({
	waitSeconds: 0,
	paths: {
		'modernizr': 'libs/modernizr',
		'jquery': 'libs/jquery',
		'waitforimages': 'libs/waitforimages',
		'owl': 'libs/owl',
		'inview': 'libs/inview',
		'smoothscroll': 'libs/smoothscroll',
		'shuffle': 'libs/shuffle',
		'knob': 'libs/jquery.knob.min',
		'customScroll': 'libs/jquery.mCustomScrollbar.concat.min',
		'underscore': 'libs/underscore-min',
		'domReady': 'libs/domReady',
		'velocity': 'libs/velocity',
		'velocityUi': 'libs/velocity.ui',
		'browser': 'libs/bowser.min',
		'odometer': 'libs/odometer.min',
		'quicksand': 'libs/jquery.quicksand',
		'placeholder': 'libs/placeholder',
		'weather': 'libs/jquery.simpleWeather.min'
	},

	shim: {
		waitforimages: ['jquery'],
		owl: ['jquery'],
		inview: ['jquery'],
		smoothscroll: ['jquery'],
		shuffle: ['jquery'],
		knob: ['jquery'],
		customScroll: ['jquery'],
		'underscore': {
			exports: '_'
		},
		'velocity': ['jquery'],
		'velocityUi': {
			deps: [
				'jquery',
				'velocity'
			]
		},
		'domReady': ['jquery'],
		'browser': ['jquery'],
		'odometer': ['jquery'],
		'quicksand': ['jquery'],
		'placeholder': ['jquery'],
		'weather': ['jquery']
	}
});

// A hack for Modernizr and AMD. This lets Modernizr be in the <head> and also
define('modernizr', [], window.Modernizr);

define([
	'smoothscroll',
	'modules/sliders',
	'modules/portfolio',
	'modules/blog',
	'modules/quotes',
	'modules/clients',
	'modules/testimonials',
	'modules/staticHeader',
	'modules/offers',
	'modules/menu',
	'modules/numbers',
	'modules/validate',
	'modules/preloader',
	'modules/aboutus',
	'modules/map'
]);