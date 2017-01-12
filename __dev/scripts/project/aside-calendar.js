(function(){
    "use strict";
    App.gui.add({
        _name: 'aside-calendar',
        selector: '.js-calendar',
        build: function($el){
            var options = {
                showOtherMonths: true
            };

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