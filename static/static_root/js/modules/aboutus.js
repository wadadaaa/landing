/* jshint undef: true, unused: true */
/* global define: false */
define(['jquery', 'domReady', 'underscore', 'owl', 'weather'], function($, domReady, _) {
    "use strict";

    var About = {

        init: function() {
            this.slider();

            $('.js-place-item').each(function() {
                var location = $(this).data('location'),
                    unit = $(this).data('unit'),
                    container = $(this).find('.js-item-weather');

                About.weather(location, unit, container);
            });

            domReady(function() {
                About.checkSizes();
            });
            $(window).resize(_.debounce(function(){
                About.checkSizes();
            },300));
        },

        checkSizes: function () {
                var slide = $('.js-aboutus-slider'),
                    about = $('.new-abs-wrapper');

                // Resets
                slide.css('height', 'auto').removeClass('absolute-slider').find('img').removeClass('second-state');

            if ($(window).width() > 1024) {
                if (about.outerHeight() >= slide.outerHeight()) {
                    slide.height(about.outerHeight()).addClass('absolute-slider');
                    About.checkImagesSize(slide);
                }
            }

        },

        checkImagesSize: function ($el) {
            $el.find('img').each(function() {
                var iH = $(this).height();

                if (iH < $el.outerHeight()) {
                    $(this).addClass('second-state');
                }
            });
        },

        slider: function() {
            var owl = $('.js-aboutus-slider');
            owl.owlCarousel(owl.data('config'));
        },

        weather: function(location, unit, $container) {
            var html = '';
            $.simpleWeather({
                location: location,
                woeid: '',
                unit: unit,
                success: function(weather) {
                    html = '<h2 class="weather-header text fw3 cw vam ttu lsm fz8">';
                    html += '<span class="text vam fz8"><span class="city-name">' + weather.city + '</span><span class="city-temp lsn text">' + weather.temp + '&deg;' + weather.units.temp + '</span></span>';
                    html += '<span class="text vam fz8"><i class="weather-icon-' + weather.code + '"></i></span>';
                    html += '</h2>';
                    html += '<p class="weather-subtitle al text cw lss fz3 fw3 ttu">' + weather.forecast[0].date + ', ' + weather.forecast[0].day + '</p>';
                    $container.html(html);
                },
                error: function(error) {
                    $container.html('<p>' + error + '</p>');
                }
            });
        }
    };

    About.init();
});