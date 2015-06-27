/* jshint undef: true, unused: true */
/* global define: false */
define(['jquery', 'inview', 'velocity', 'velocityUi'], function(){
	"use strict";

	var s = {
		$offer: $('.js-offer-block'),
		$book: $('.booknow-section'),
		$blog: $('.blog-item'),
		$quote: $('.quotes'),
		$team: $('.teammember'),
		$box: $('.box'),
		$clients: $('.clients'),
		$testim: $('.testimonials'),
		$price: $('.pricelist'),
		$add: $('.deal-wrapper')
	};

	var Reveal = {

		init: function () {

			if ($(window).width() < 1025) {
				$('html').addClass('low-device');
			} else {
				// Prepare for reveal
				$.each(s, function() {
				    this.css('opacity', '0');
				}); 

				Reveal.bindUiActions();
			}
			this.reveal.skills();

		},

		bindUiActions: function () {
			this.reveal.offer(this);
			this.reveal.booknow(this);
			this.reveal.blog(this);
			this.reveal.quote(this);
			this.reveal.team(this);
			this.reveal.box(this);
			this.reveal.clients(this);
			this.reveal.testim(this);
			this.reveal.price(this);
			this.reveal.add(this);

		},

		toLeft: function (el, wait) {
			el.velocity({
				translateX: ['0', '30px'],
				opacity: 1,
				translateZ: 0
			}, {duration: 1000, delay: wait});
		},

		toTop: function (el, wait) {
			el.velocity({
				translateY: ['0', '30px'],
				opacity: 1,
				translateZ: 0
			}, {duration: 1000, delay: wait});
		},

		reveal: {
			skills: function () {
				$('.skills').one('inview', function () {
					$('.progress', $(this)).each(function () {
						$(this).css('width', $(this).data('config').value + '%');		
					});
				});
			},
			offer: function (that) {
				var wrapper = s.$offer.closest('section');

				wrapper.each(function() {
					$(this).find(s.$offer).each(function(index) {
						$(this).one('inview', function () {
							that.toLeft($(this), index * 150);
						});
					});
				});
			},
			booknow: function (that) {
				s.$book.each(function(index) {
					$(this).one('inview', function () {
						that.toTop($(this), index * 150);
					});
				});
			},
			blog: function (that) {
				s.$blog.each(function(index) {
					$(this).one('inview', function () {
						that.toTop($(this), index * 150);
					});
				});
			},
			quote: function (that) {
				s.$quote.each(function(index) {
					$(this).one('inview', function () {
						that.toTop($(this), index * 150);
					});
				});
			},
			team: function (that) {
				s.$team.each(function(index) {
					$('.text', $(this)).css('opacity', '0');

					$(this).one('inview', function () {
						var wait = 500;
						$(this).velocity({
							translateY: ['0', '30px'],
							opacity: 1,
							translateZ: 0
						}, 1000, wait, function () {
							$('.text', $(this)).velocity({
								opacity: 1
							}, 1000, 'ease');
						});
					});
				});
			},
			box: function (that) {
				s.$box.each(function(index) {
					$(this).one('inview', function () {
						that.toLeft($(this), index * 150);
					});
				});
			},
			clients: function (that) {
				s.$clients.each(function(index) {
					$(this).one('inview', function () {
						that.toTop($(this), index * 150);
					});
				});
			},
			testim: function (that) {
				s.$testim.each(function(index) {
					$(this).one('inview', function () {
						that.toTop($(this), index * 150);
					});
				});
			},
			price: function (that) {
				s.$price.each(function(index) {
					$(this).one('inview', function () {
						that.toTop($(this), index * 150);
					});
				});
			},
			add: function (that) {
				s.$add.each(function(index) {
					$(this).one('inview', function () {
						that.toTop($(this), index * 150);
					});
				});
			}
		}
	};

	return Reveal;
});