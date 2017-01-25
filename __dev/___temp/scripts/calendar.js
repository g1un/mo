(function(){
"use strict";
(function(){
    "use strict";
    App.gui.add({
        _name: 'aside',
        selector: '.js-calendar',
        build: function($el){
            var options;

            if($el.hasClass('js-calendar-markers')) {
                // An array of dates
                var completeDates = {};
                var incompleteDates = {};
                completeDates[ new Date( '12/27/2016' )] = new Date( '12/27/2016' ).toString();
                completeDates[ new Date( '12/28/2016' )] = new Date( '12/28/2016' ).toString();
                completeDates[ new Date( '12/29/2016' )] = new Date( '12/29/2016' ).toString();
                completeDates[ new Date( '01/01/2017' )] = new Date( '01/01/2017' ).toString();
                incompleteDates[ new Date( '01/18/2017' )] = new Date( '01/18/2017' ).toString();
                incompleteDates[ new Date( '01/19/2017' )] = new Date( '01/19/2017' ).toString();
                incompleteDates[ new Date( '01/21/2017' )] = new Date( '01/21/2017' ).toString();

                options = {
                    showOtherMonths: true,
                    beforeShowDay: function(date) {
                        var complete = completeDates[date];
                        var incomplete = incompleteDates[date];
                        if (complete) {
                            return [true, "__complete", complete];
                        } else if(incomplete) {
                            return [true, "__incomplete", incomplete];
                        } else {
                            return [true, '', ''];
                        }
                    }
                }
            } else {
                options = {
                    showOtherMonths: true
                };
            }

            $el.datepicker(options);

            return {
                destroy: function(){
                    $el.datepicker( "destroy" );
                }
            }
        },
        destroy: function($el, methods){
            if(methods && typeof methods['destroy'] == 'function') methods['destroy']();
        }
    });
})();
})();