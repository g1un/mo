App.run(function(){
    // $(document).ready(function() {
    //     // An array of dates
    //     var eventDates = {};
    //
    //     eventDates[ new Date( '12/27/2016' )] = new Date( '12/27/2016' );
    //     eventDates[ new Date( '12/28/2016' )] = new Date( '12/28/2016' );
    //     eventDates[ new Date( '12/29/2016' )] = new Date( '12/29/2016' );
    //     eventDates[ new Date( '01/01/2017' )] = new Date( '01/01/2017' );
    //     eventDates[ new Date( '01/18/2017' )] = new Date( '01/18/2017' );
    //     eventDates[ new Date( '01/19/2017' )] = new Date( '01/19/2017' );
    //     eventDates[ new Date( '01/21/2017' )] = new Date( '01/21/2017' );
    //
    //     $('.js-calendar-markers').datepicker({
    //         beforeShowDay: function(date) {
    //             var Highlight = SelectedDates[date];
    //             if (Highlight) {
    //                 return [true, "Highlighted", Highlight];
    //             }
    //             else {
    //                 return [true, '', ''];
    //             }
    //         }
    //     });
    // });

    // App.onClick('.js-suppliers-menu-btn', function(e){
    //     e.preventDefault();
    //     var btn = $('.js-suppliers-menu-btn');
    //     var menu = $('.js-suppliers-menu');
    //     var btnIndex = btn.index(this);
    //     var thisMenu = menu.eq(btnIndex);
    //
    //     if(!thisMenu.hasClass('__show')) {
    //         thisMenu.addClass('__show');
    //     } else {
    //         thisMenu.removeClass('__show');
    //     }
    // });
    //
    // App.onClick('.js-suppliers-menu-close', function(e){
    //     e.preventDefault();
    //     var close = $(this);
    //     var menu = close.closest('.js-suppliers-menu');
    //
    //     menu.removeClass('__show');
    // });
    //
    // App.onClick('.js-suppliers-complex-btn', function(e){
    //     e.preventDefault();
    //     var clicked = $(e.target);
    //     if(!clicked.closest('.js-input-volume').length) {
    //         var btn = $(this);
    //         var menu = btn.parent().find('.js-suppliers-complex-menu');
    //
    //         if(!menu.hasClass('__show')) {
    //             btn.addClass('__clicked');
    //             menu.addClass('__show');
    //         } else {
    //             btn.removeClass('__clicked');
    //             menu.removeClass('__show');
    //         }
    //     }
    // });
});