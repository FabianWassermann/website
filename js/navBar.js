window.addEventListener('DOMContentLoaded', event => {
    let Scrollbar = window.Scrollbar;

    let options = {
        'damping': 0.08,
    }

    let bodyScrollBar = Scrollbar.init(document.querySelector('#scrollbar'), options);

    // Navbar shrink function
    var navbarShrink = function (e) {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }

        // old version without smooth-scrollbar
        // if (window.scrollY === 0) {
        //     navbarCollapsible.classList.remove('navbar-shrink')
        // } else {
        //     navbarCollapsible.classList.add('navbar-shrink')
        // }

        if (e?.offset.y === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink({offset: {y: 0}});

    // Shrink the navbar when page is scrolled
    // document.addEventListener('scroll', navbarShrink); // old version without smooth-scrollbar
    bodyScrollBar.addListener(navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
