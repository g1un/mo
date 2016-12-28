(function(){
    "use strict";
    App.gui.add({
        _name: 'main-slider',
        selector: '.js-main-slider ul',
        build: function($el){
            var options = {
                arrows: false,
                // autoplay: true,
                // autoPlay: 3000
            };

            $el.slick(options);

            return {
                destroy: function(){
                    $el.slick("unslick");
                }
            }
        },
        destroy: function($el, methods){
            if(methods && typeof methods['destroy'] == 'function') methods['destroy']();
        }
    });
})();