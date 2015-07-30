/* jshint undef: true, unused: true */
/* global define: false */
define(['jquery', 'shuffle', 'underscore', 'waitforimages'], function($, Shuffle, _) {

	// Selector
	var S = {
		blog: $('.blog')
	};

	// Main component
	var Blog = {
		init: function() {

			S.blog.waitForImages(function() {
			    S.blog.shuffle({
			    	itemSelector: '.item'
			    });
			});
			
			$(window).resize(_.debounce(function(){
				S.blog.shuffle('update');
			}, 1000));

			// Toggle icon active class
			$('.metaicons a').click(function(e) {
				e.preventDefault();
				$(this).toggleClass('is-active');
			});
		}
	}

	S.blog.waitForImages(function() {
	    Blog.init();
	});
});