$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // FAQ TITLE 
    new ScrollMagic.Scene({
        triggerElement: "#trigger-faq",
        triggerHook: 0.9,
        duration: "85%", 
        offset: 100 // move trigger to center of element
    })
    .setClassToggle('#reveal-faq-title', 'visible')
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    // FAQ ITEMS
    var revealElements = document.getElementsByClassName("faq-item");
		for (var i=0; i<revealElements.length; i++) { // create a scene for each element
			new ScrollMagic.Scene({
                    triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                    offset: 50,												 // start a little later
                    triggerHook: 0.9,
                    duration: "100%"
                })
                .setClassToggle(revealElements[i], "visible") // add class toggle
                // .addIndicators({name: "testimonial-item " + (i+1) }) // add indicators (requires plugin)
                .addTo(controller);
		}
});