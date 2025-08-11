(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        // smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);



// This below code is of privacy and policy and confidential notice
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.footer-link');
    const overlay = document.getElementById('modalOverlay');
    const titleEl = document.getElementById('modalTitle');
    const contentEl = document.getElementById('modalContent');
    const closeBtn = document.getElementById('modalClose');

    // Open modal with data from data- attributes
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // stop page jump
        const title = link.dataset.title || link.textContent.trim();
        const content = link.dataset.content || '';
        titleEl.textContent = title;
        contentEl.textContent = content;
        overlay.classList.add('show');
        overlay.setAttribute('aria-hidden', 'false');
        // prevent background scroll while modal is open
        document.body.style.overflow = 'hidden';
        // focus sent to close for keyboard users
        closeBtn.focus();
      });
    });

    function closeModal() {
      overlay.classList.remove('show');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    // close via ×
    closeBtn.addEventListener('click', closeModal);

    // close when clicking on the overlay (outside the modal box)
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    // close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('show')) closeModal();
    });
  });


function downloadImage() {
    // Relative path to your image inside vijayimg folder
    const imagePath = "vijay img/Cheatsheet.jpg"; 

    const link = document.createElement("a");
    link.href = imagePath;
    link.download = "Executive_Conference_Cheatsheet.jpg"; // file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

