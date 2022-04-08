$(function (){
    $('#fullpage').fullpage({
        scrollingSpeed: 700,
        anchors:['firstPage','secondPage','lastPage'],
        navigation: false,
        navigationTooltips: ['첫페이지', '두번째페이지', '세번째페이지'],
        navigationPosition: 'right',
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        keyboardScrolling: true,
        animateAnchor: true,
        controllArrows: true,
        menu:'.myNav',
        sectionsColor : ['white', 'white', 'white', 'white'],
        fixedElements: 'footer',
        fadingEffect: true,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
        arrows: true
    });

    $('#login-page').fullpage({
        sectionsColor : ['#d4cfcc'],
    });
})

