var callback = {
    main: function(ctx,next){
        let menu = document.getElementById('main-menu');
        console.log(menu);

        window.addEventListener('scroll', function(e) {
            if(menu.classList.contains('main-menu-scroll') && window.pageYOffset < 40) {
                menu.classList.remove('main-menu-scroll');
            }
            if(window.pageYOffset > 40) {
                menu.classList.add('main-menu-scroll');
            }
        })
    }
}



module.exports = callback;
