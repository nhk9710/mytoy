$(function (){
    $('#fullpage').fullpage({
        fingersonly: false,
        scrollingSpeed: 900,
        anchors:['firstPage','secondPage','thirdPage','lastPage'],
        navigation: true,
        navigationTooltips: ['첫페이지', '두번째페이지', '세번째페이지', '네번째페이지'],
        navigationPosition: 'right',
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        keyboardScrolling: true,
        animateAnchor: true,
        controllArrows: true,
        menu:'.myNav',
        sectionsColor : ['lightblue', 'pink', 'lightgreen', 'grey'],
        fixedElements: 'footer',
        fadingEffect: true,
    });
})
