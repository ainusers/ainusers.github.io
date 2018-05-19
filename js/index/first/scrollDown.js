
/*scrollDown滚动点击事件*/
AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});

$('.scrollDown').on('click', function(e) {
    $('html, body').animate({
        scrollTop: $(window).height()
    }, 1000);
});
