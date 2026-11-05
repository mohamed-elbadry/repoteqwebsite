document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(
        ".navbar-nav .nav-link"
    );

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            // Remove active from all links
            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            // Add active to clicked link
            this.classList.add("active");

        });

    });

});


// ----------------------------
// Hero Swiper
// ----------------------------
const swiperEl = document.querySelector('.mySwiper');

if (swiperEl) {
    Object.assign(swiperEl, {
        loop: true,
        speed: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    try {
        if (!swiperEl.swiper) {
            swiperEl.initialize();
        }
    } catch (e) {
        // already initialized
    }

    // ---- Hero Pagination Sync ----
    const heroDots = document.querySelectorAll('#heroPagination .hero-dot');

    function setActiveDot(index) {
        heroDots.forEach(dot => dot.classList.remove('active'));
        if (heroDots[index]) {
            heroDots[index].classList.add('active');
        }
    }

    // Update dots on slide change
    swiperEl.addEventListener('swiperslidechange', function () {
        if (swiperEl.swiper) {
            setActiveDot(swiperEl.swiper.realIndex);
        }
    });

    // Click on dot → go to that slide
    heroDots.forEach(dot => {
        dot.addEventListener('click', function () {
            const idx = parseInt(this.getAttribute('data-index'));
            if (swiperEl.swiper) {
                swiperEl.swiper.slideToLoop(idx);
                setActiveDot(idx);
            }
        });
    });
}

// ---- Product Swiper Navigation ----
const productSwiperEl = document.querySelector('#productSwiper');
const productPrevBtn = document.querySelector('.product-nav-prev');
const productNextBtn = document.querySelector('.product-nav-next');

if (productSwiperEl) {
    if (productPrevBtn) {
        productPrevBtn.addEventListener('click', function () {
            if (productSwiperEl.swiper) {
                productSwiperEl.swiper.slideNext();
            }
        });
    }
    if (productNextBtn) {
        productNextBtn.addEventListener('click', function () {
            if (productSwiperEl.swiper) {
                productSwiperEl.swiper.slidePrev();
            }
        });
    }
}


// ---- Projects Swiper Navigation ----
document.addEventListener('DOMContentLoaded', function () {

    const projectsSwiperEl = document.querySelector('#projectsSwiper');
    const projectsNextBtn = document.querySelector('.projects-nav-next');
    const projectsPrevBtn = document.querySelector('.projects-nav-prev');

    if (projectsSwiperEl) {
        // Apply responsive breakpoints
        Object.assign(projectsSwiperEl, {
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
            },
        });
        projectsSwiperEl.initialize();

        if (projectsNextBtn) {
            projectsNextBtn.addEventListener('click', function () {
                if (projectsSwiperEl.swiper) {
                    projectsSwiperEl.swiper.slidePrev();
                }
            });
        }
        if (projectsPrevBtn) {
            projectsPrevBtn.addEventListener('click', function () {
                if (projectsSwiperEl.swiper) {
                    projectsSwiperEl.swiper.slideNext();
                }
            });
        }
    }

});


// ---- Projects Swiper Navigation ----
document.addEventListener('DOMContentLoaded', function () {

    const projectsSwiperEl = document.querySelector('#visionsSwiper');
    const projectsNextBtn = document.querySelector('.projects-nav-next');
    const projectsPrevBtn = document.querySelector('.projects-nav-prev');

    if (projectsSwiperEl) {
        // Apply responsive breakpoints
        Object.assign(projectsSwiperEl, {
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            },
        });
        projectsSwiperEl.initialize();

        if (projectsNextBtn) {
            projectsNextBtn.addEventListener('click', function () {
                if (projectsSwiperEl.swiper) {
                    projectsSwiperEl.swiper.slidePrev();
                }
            });
        }
        if (projectsPrevBtn) {
            projectsPrevBtn.addEventListener('click', function () {
                if (projectsSwiperEl.swiper) {
                    projectsSwiperEl.swiper.slideNext();
                }
            });
        }
    }

});

