$(document).ready(function(){
    $('#mobile-btn').on('click', function() {
        $('#mobile-menu').toggleClass('active')
        $('#mobile-btn').find('i').toggleClass('fa-x')
    });

    const sections = $('section');
    const navItems = $('.nav-item')

    $(window).on('scroll', function(){
        const header = $('header');
        const scroLLPosition = $(window).scrollTop() - header.outerHeight();
        let activeSecctionIndex = 0;
        
        if(scroLLPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top -96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if(scroLLPosition >= sectionTop && scroLLPosition < sectionBottom) {
                activeSecctionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSecctionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duraction: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duraction: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial-chef', {
        origin: 'left',
        duraction: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duraction: 1000,
        distance: '20%'
    });
});