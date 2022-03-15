$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // FEATURES GRID
    new ScrollMagic.Scene({
        triggerElement: "#trigger-features-grid",
        triggerHook: 0.9, 
        duration: $("#reveal-features-grid").height() + 700, 
        offset: 100 // move trigger to center of element
    })
    .setClassToggle('#reveal-features-grid', 'visible')
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    // TESTIMONIALS TITLE 
    new ScrollMagic.Scene({
        triggerElement: "#trigger-testimonials",
        triggerHook: 0.9,
        duration: "85%", 
        offset: 100 // move trigger to center of element
    })
    .setClassToggle('#reveal-testimonials-title', 'visible')
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    // TESTIMONIALS ITEMS
    var revealElements = document.getElementsByClassName("testimonial-item");
		for (var i=0; i<revealElements.length; i++) { // create a scene for each element
			new ScrollMagic.Scene({
                    triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                    offset: 50,												 // start a little later
                    triggerHook: 0.9,
                    duration: "80%"
                })
                .setClassToggle(revealElements[i], "visible") // add class toggle
                // .addIndicators({name: "testimonial-item " + (i+1) }) // add indicators (requires plugin)
                .addTo(controller);
		}

    // PRICING TITLE
    new ScrollMagic.Scene({
        triggerElement: "#trigger-pricing",
        triggerHook: 0.9,
        duration: "85%", 
        offset: 100 // move trigger to center of element
    })
    .setClassToggle('#reveal-pricing-title', 'visible')
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    // PRICING ITEMS
    var revealElements = document.getElementsByClassName("pricing-item");
		for (var i=0; i<revealElements.length; i++) { // create a scene for each element
			new ScrollMagic.Scene({
                    triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                    offset: 50,												 // start a little later
                    triggerHook: 0.9,
                    duration: "110%"
                })
                .setClassToggle(revealElements[i], "visible") // add class toggle
                // .addIndicators({name: "pricing-item " + (i+1) }) // add indicators (requires plugin)
                .addTo(controller);
		} 

    // ABOUT TITLE
    new ScrollMagic.Scene({
        triggerElement: "#trigger-about",
        triggerHook: 0.9,
        duration: "85%", 
        offset: 100 // move trigger to center of element
    })
    .setClassToggle("#reveal-about-title", "visible") // add class to reveal
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    // TIMELINE(ABOUT) ITEMS
    var revealElements = document.getElementsByClassName("timeline-item");
		for (var i=0; i<revealElements.length; i++) { // create a scene for each element
			new ScrollMagic.Scene({
                    triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                    offset: 50,												 // start a little later
                    triggerHook: 0.9,
                    duration: "110%"
                })
                .setClassToggle(revealElements[i], "visible") // add class toggle
                // .addIndicators({name: "timeline-item " + (i+1) }) // add indicators (requires plugin)
                .addTo(controller);
		} 
});