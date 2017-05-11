// const $ = require('jquery');
// require('jquery-plugin-viewport-checker');

var callback = {
    main: function(ctx,next){
        let menu = document.getElementById('main-menu');
        let button = document.getElementById('main-button');

        window.addEventListener('scroll', function(e) {
            if(menu.classList.contains('main-menu-scroll') && window.pageYOffset < 40) {
                menu.classList.remove('main-menu-scroll');
            }

            if(button.classList.contains('menu-block-button-scroll') && window.pageYOffset < 40) {
                button.classList.remove('menu-block-button-scroll');
            }

            if(window.pageYOffset > 40) {
                menu.classList.add('main-menu-scroll');
                button.classList.add('menu-block-button-scroll');
            }

        })


        $('.point-belarus').viewportChecker({
          classToRemove: 'invisible',
          classToAdd: 'visible animated zoomIn',
          offset: 100
        });

        $('.point-usa').viewportChecker({
          classToRemove: 'invisible',
          classToAdd: 'visible animated zoomIn',
          offset: 100
        });

        $('.point-germany').viewportChecker({
          classToRemove: 'invisible',
          classToAdd: 'visible animated zoomIn',
          offset: 100
        });

        $('.point-russia').viewportChecker({
          classToRemove: 'invisible',
          classToAdd: 'visible animated zoomIn',
          offset: 100
        });

        $('.point-india').viewportChecker({
          classToRemove: 'invisible',
          classToAdd: 'visible animated zoomIn',
          offset: 100
        });

        $('.point-china').viewportChecker({
          classToRemove: 'invisible',
          classToAdd: 'visible animated zoomIn',
          offset: 100
        });
    }
}



module.exports = callback;
