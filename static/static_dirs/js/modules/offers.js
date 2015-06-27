/* jshint undef: true, unused: true */
/* global define: false */
define(['jquery', 'underscore', 'waitforimages', 'customScroll', 'velocity'], function($, _) {

    // Selector
    var s = {
        trigger: $('.js-show-details'),
        desc: $('.js-description'),
        close: $('.js-close-details'),
        book: $('.js-booknow-btn')
    };

    // Main component
    var Component = {
        init: function() {

            Component.offerDetails.prepareData();
            s.trigger.click(function() {
                var target = $(this).closest('.js-offer-block');
                Component.offerDetails.collectData(target);
            });
            s.close.click(function() {
                if ($('.js-book-container.is-open').length) {
                    Component.offerDetails.closeForm();
                } else {
                    Component.offerDetails.close();
                }
            });
            s.book.click(function() {
                Component.offerDetails.showForm();
            });
        },

        offerDetails: {
            prepareData: function() {
                s.desc.each(function() {
                    $(this).data('description', $(this).html().trim());
                });

                // Fill short description
                s.desc.each(function() {
                    var d = $(this).data('description').substring(0, 270);
                    $(this).html(d).append('...');
                });
            },
            collectData: function(target) {
                var title = $('.js-name', target).html(),
                    desc = $('.js-description', target).data('description'),
                    price = $('.js-cost', target).html(),
                    slider = $('img', target).data('large-images'),
                    days = $('.day', target),
                    path = $('img', target).data('path');

                if (target.hasClass('loaded')) {
                    window.newOffer = false;
                } else {
                    window.newOffer = true;
                    target.addClass('loaded');
                }
                Component.offerDetails.fillData(title, desc, price, slider, days, path);
            },
            fillData: function(title, desc, price, slider, days, path) {
                var block = $('.js-details-wrapper');

                // Fill slider block
                var slides = [];
                var parent = "<div class='wrapper fullheight owl slider offers-slider ovh' data-config=''></div>";
                $.each(slider, function(index, val) {
                    var img = $('<img src=' + path + val + ' alt="" class="image fullwidth">');
                    slides.push(img);
                });
                $('.offers-slider-container').html($(parent));
                $.each(slides, function(index, val) {
                    $('.offers-slider').append(val);
                });
                $('.offers-slider', block).owlCarousel({
                    items: 1,
                    dots: false,
                    nav: true,
                    navText: ["", ""]
                });

                // Fill inputs
                $('.order-name-field', block).val(title);
                $('.order-price-field', block).val(price);


                // Fill title
                $('.js-item-title', block).html(title);


                // Fill description
                $('.item-description', block).html(desc);


                // Fill price
                $('.js-item-price', block).html(price);


                // Create accordion
                $('.js-days-list', block).html('');
                days.each(function() {
                    var title = $('.js-title', $(this)).html(),
                        desc = $('.js-acc-description', $(this)).html();

                    var tab = [
                        '<div class="wrapper js-day-item day-item mb10">',
                        '<div class="wrapper ac day-title pointer">',
                        '<h5 class="title text fz6 c lh22 fw3 js-day-title">' + title + '</h5>',
                        '</div>',
                        '<div class="wrapper day-description">',
                        '<p class="js-day-description text fw3 fsi c6 fz1 lh2 pl20 pt15 pr20 pb15">' + desc + '</p>',
                        '</div>',
                        '</div>',
                    ].join('');

                    $('.js-days-list', block).append($(tab));
                });
                Component.initOffersAccordion();
                Component.offerDetails.open();
            },
            open: function() {


                if (window.newOffer) {
                    $('.offers-slider-container').removeClass('offer-loaded').append('<div class="loading-offer-images">loading images</div>')
                    .waitForImages(function () {
                        $(this).addClass('offer-loaded');
                        setTimeout(function() {
                            $('.loading-offer-images').remove();
                        }, 300);
                    });
                }


                $('.js-details-wrapper').addClass('is-open').velocity({
                    translateX: ['0', '100%']
                }, 500, 'ease', function() {
                    $('body').css('overflow', 'hidden');
                    $('.js-details-wrapper').css('overflow-y', 'scroll');
                });
            
            },
            close: function() {
                $('body').css({
                    'overflow-y': 'scroll',
                    'overflow-x': 'hidden'
                });
                $('.js-details-wrapper').css('overflow', 'hidden').removeClass('is-open');

                $('.js-details-wrapper').velocity({
                    translateX: ['100%', '0']
                }, 500, 'ease', function() {
                    Component.offerDetails.reset();
                    Component.offerDetails.closeForm();
                });
            },
            reset: function() {
                var p = $('.js-details-wrapper');
                $('.js-days-list', p).html('');
                $('.js-item-price', p).html('');
                $('.item-description', p).html('');
                $('.js-item-title', p).html('');
                $('.offers-slider-container', p).html('');
            },
            showForm: function() {
                $('.js-book-container').velocity({
                    translateX: ['0', '100%']
                }, 500, 'ease').addClass('is-open');
                $('.offer-tabs-container').addClass('is-open');
            },
            closeForm: function() {
                $('.js-book-container').velocity({
                    translateX: '100%'
                }, 500, 'ease').removeClass('is-open');
                $('.offer-tabs-container').removeClass('is-open');
                $('.error').removeClass('error');
            }
        },

        initOffersAccordion: function() {
            $('.day-description').hide().click(function(e) {
                e.stopPropagation();
            });;

            $('.js-day-item').click(function() {
                var that = $(this);

                if (!$('.changing-offer-tab').length) {
                    that.addClass('changing-offer-tab');
                    // Close opened accordions 
                    if ($('.js-day-item.active').length) {

                        if (that.hasClass('active')) {
                            $('.day-description', that).slideUp(300, function() {
                                that.removeClass('active');
                                $('.changing-offer-tab').removeClass('changing-offer-tab');
                            });
                        } else {
                            $('.js-day-item.active .day-description').slideUp(300, function() {
                                $('.js-day-item').removeClass('active');

                                $('.day-description', that).slideDown(300, function() {
                                    $('.changing-offer-tab').removeClass('changing-offer-tab');
                                    that.addClass('active');
                                });
                            });
                        }
                    } else {
                        that.addClass('active');
                        $('.day-description', that).slideDown(300, function() {
                            $('.changing-offer-tab').removeClass('changing-offer-tab');
                        });
                    }
                }
            });
        }
    }

    Component.init();
});