$(function () {
    $('.accordion-collapse').on('event', function() {
        console.log("test")
        if ($(this).hasClass('show'))
            $(this).parent().toggleClass('current');
    })

    var observebles = $(".accordion-collapse");
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if ($(mutation.target).hasClass('show'))
                $(mutation.target).parent().addClass('current');
            else
                $(mutation.target).parent().removeClass('current');
        });
    });

    for (let observeble of observebles) {
        observer.observe(observeble, {
            attributes: true,
            attributeFilter: ['class']
        });
    }

    const accIcons = $('.accordion-icon');    
    $('.accordion-button').on('click', function() {
        for (let accIcon of accIcons) {
            if ($(accIcon).hasClass('acc-btn-animate-open') && !$(this).children(".accordion-icon").is($(accIcon)))
                $(accIcon).toggleClass('acc-btn-animate-open');
        }
        $(this).children(".accordion-icon").toggleClass("acc-btn-animate-open");
    });
});