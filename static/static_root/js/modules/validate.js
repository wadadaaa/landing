/* jshint undef: true, unused: true */
/* global define: false */
define(['jquery', 'velocity'], function() {
    "use strict";

    var Validate = {

        init: function() {
            this.bindUiActions();
        },

        bindUiActions: function() {
            $('.js-checkout').click(function() {
                Validate.start($(this));
            });

            $('.required').focus(function () {
            	$(this).parent().removeClass('error');
            });
        },

        start: function(target) {
            var formValid = true,
                thisForm = target.closest('form');

            $('.required', thisForm).each(function() {
                $(this).val($(this).val().trim());

                var thisInput = $(this).val().replace(/\s+/g, ''),
                    re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if ($(this).attr('name') === "mail_field") {
                    if (thisInput === "" || !re.test(thisInput)) {
                        formValid = false;
                        $(this).parent().addClass('error');
                    }
                } else {
                    if (thisInput === "") {
                        formValid = false;
                        $(this).parent().addClass('error');
                    }
                }
            });


            if (formValid) {
                Validate.sendForm(thisForm);

            	Validate.activeState(thisForm, 'succes');
            } else {
        		Validate.activeState(thisForm, 'error');
            }
        },

        activeState: function (thisForm, state) {
        	thisForm.addClass('active-state');
        	setTimeout(function() {
        		thisForm.addClass(state);
        		setTimeout(function() {
        			thisForm.removeClass(state);
        			setTimeout(function() {
        				thisForm.removeClass('active-state');
        			}, 250);
        		}, 700);
        	}, 250);
        },

        sendForm: function(thisForm) {
            $.ajax({
                type: 'POST',
                url: 'sendmail.php',
                data: thisForm.serialize(), // serializes the form's elements.
                success: function() {
                    $('input', thisForm).each(function() {
                        $('.required').val('');
                    });
                }
            });
        }
    };

    Validate.init();
});
