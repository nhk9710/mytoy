$(function (){
    $('#fullpage').fullpage({
        scrollingSpeed: 700,
        anchors:['firstPage','secondPage','lastPage'],
        navigation: true,
        navigationTooltips: ['첫페이지', '두번째페이지', '세번째페이지'],
        navigationPosition: 'right',
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        keyboardScrolling: true,
        animateAnchor: true,
        controllArrows: true,
        menu:'.myNav',
        sectionsColor : ['lightblue', '#393939', '#121C25', 'grey'],
        fixedElements: 'footer',
        fadingEffect: true,
    });

    $('#login-page').fullpage({

        sectionsColor : ['#d4cfcc'],
    });

})
