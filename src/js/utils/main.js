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
    },
    directions: function(ctx,next) {
        console.log('dir');
    },
    services: function(ctx,next) {
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

        var map;

            ymaps.ready(function(){

            var placemark = new ymaps.Placemark([53.890128, 27.536903],{
                hintContent: 'логистик'
            },
            {
                preset: 'twirl#redDotIcon'
            });

            map = new ymaps.Map(document.getElementById('map'), {
                center: [53.890128, 27.536903],
                zoom: 16,
                controls: [],
                behaviors: ["scrollZoom"]
            });
            map.geoObjects.add(placemark);
            map.behaviors.disable("scrollZoom");
            // map.controls.add("zoomControl").add("typeSelector");
        });
    }
}



module.exports = callback;
