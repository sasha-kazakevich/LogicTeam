console.log('Ky');

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
