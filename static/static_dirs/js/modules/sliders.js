/* jshint undef: true, unused: true */
/* global define: false */
define(['jquery', 'owl', 'velocity', 'velocityUi'], function($, owl) {

    // Selector
    var S = {
        owl: $('.slider')
    };

    // Main component
    var Sliders = {
        init: function() {
            if (S.owl.hasClass('js-main-slider')) {
                $(window).on('pageLoaded', function() {
                    Sliders.animateText.showCurent();
                });
            }

            this.bindOwl(S.owl, S.owl.data('config'));
        },

        bindOwl: function(target, config) {

            target.owlCarousel(config);

            if (target.hasClass('js-main-slider')) {
                Sliders.animateText.afterInit($('.js-main-slider'));
            }
        },

        animateText: {
            afterInit: function(target) {
                target.on('translated.owl.carousel', function(event) {
                    Sliders.animateText.showCurent(target);
                    Sliders.animateText.hideOthers(target);
                });
            },

            hideOthers: function(target) {
                $('.owl-item:not(.active) .text, .owl-item:not(.active) .button', target).css('opacity', '0');
            },

            showCurent: function(target) {
                var thisEl = $('.owl-item.active', target);

                if ($('.text', thisEl).css('opacity') === "0") {
                    // Show text
                    $('.text', thisEl).velocity('stop').velocity('transition.slideDownIn', function() {
                        $('.button', thisEl).velocity('stop').velocity('transition.slideDownIn');
                    });
                }

            }
        }

    }

    Sliders.init();
});
