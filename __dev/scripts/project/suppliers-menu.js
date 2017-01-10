App.run(function(){
    App.onClick('.js-suppliers-menu-btn', function(e){
        e.preventDefault();
        var btn = $('.js-suppliers-menu-btn');
        var menu = $('.js-suppliers-menu');
        var btnIndex = btn.index(this);
        var thisMenu = menu.eq(btnIndex);

        if(!thisMenu.hasClass('__show')) {
            thisMenu.addClass('__show');
        } else {
            thisMenu.removeClass('__show');
        }
    });

    App.onClick('.js-suppliers-menu-close', function(e){
        e.preventDefault();
        var close = $(this);
        var menu = close.closest('.js-suppliers-menu');

        menu.removeClass('__show');
    });

    App.onClick('.js-suppliers-complex-btn', function(e){
        e.preventDefault();
        var btn = $(this);
        var menu = btn.parent().find('.js-suppliers-complex-menu');

        if(!menu.hasClass('__show')) {
            btn.addClass('__clicked');
            menu.addClass('__show');
        } else {
            btn.removeClass('__clicked');
            menu.removeClass('__show');
        }
    });
})