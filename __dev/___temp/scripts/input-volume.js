(function(){
"use strict";
App.onClick('.js-input-volume-minus', function(){
    var wrapper = $(this).closest('.js-input-volume');
    var input = wrapper.find('.js-input-volume-input');
    if (input.val() > 0) input.val(+input.val() - 1);
});

App.onClick('.js-input-volume-plus', function(){
    var wrapper = $(this).closest('.js-input-volume');
    var input = wrapper.find('.js-input-volume-input');
    input.val(+input.val() + 1);
});

// App.gui.add({
//     _name: 'input-volume',
//     selector: '.js-input-volume',
//     build: function($el) {
//         var minus = $el.find('.js-input-volume-minus');
//         var plus = $el.find('.js-input-volume-plus');
//         var input = $el.find('.js-input-volume-input');
//         plus.on('click', function () {
//             console.log('plus click');
//             input.val(+input.val() + 1);
//         });
//         minus.on('click', function () {
//             if (input.val() > 0) input.val(+input.val() - 1);
//         });

        // var _self;
        // var $this = $(this);
        // var minus = $el.find('.js-slider-volume-minus');
        // var plus = $el.find('.js-slider-volume-plus');
        // var input = $el.find('.js-slider-volume-input');
        // $el.slider({
        //     step: 1,
        //     value: 0
        // });
        //
        // return _self = {
        //     refresh: function() {
        //         if ($('body').find($el).length < 1) {
        //             _self.destroy();
        //             return;
        //         }
        //     },
        //     destroy: function() {
        //         if ($('body').find($el).length < 1) {
        //             return;
        //         }
        //         return $el.slider("destroy");
        //     }
        // };
//     },
//     destroy: function($el, methods) {
//         if (typeof methods['destroy'] !== 'function') {
//             return;
//         }
//         methods['destroy']();
//     }
// });
})();