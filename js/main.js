const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const header = document.querySelector('header')

if (scrollY > 100) {
    header.classList.add('active');
} else {
    header.classList.remove('active');
}

window.addEventListener('scroll', function () {
    if (this.scrollY > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
})


const companySwpParent = new Swiper('.company-swp-parent .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    initialSlide: 1,
    allowTouchMove: false,
    loop: true,
})

const companySwpChild = new Swiper('.company-swp-child .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    allowTouchMove: false,
    loop: true,
    pagination: {
        el: ".company-swp .swp-pagination",
        type: "progressbar",
    },
})

const companySwpCount = document.querySelector('.company-swp .swp-bullet b')
const companySwpLength = document.querySelector('.company-swp .swp-bullet span')

companySwpChild.on('slideChange', function (e) {
    companySwpCount.textContent = companySwpChild.realIndex + 1;
    companySwpLength.textContent = '-' + companySwpChild.slides.length;
});

const companySwpPrev = document.querySelector('.company-swp .swp-btn-prev');
const companySwpNext = document.querySelector('.company-swp .swp-btn-next');

if (companySwpChild && companySwpPrev) {
    companySwpPrev.onclick = () => {
        companySwpChild.slidePrev();
        companySwpParent.slidePrev();
    }

    companySwpNext.onclick = () => {
        companySwpChild.slideNext();
        companySwpParent.slideNext();
    }
}

const projectCards = document.querySelectorAll('.project-swp');

if (projectCards.length) {
    projectCards.forEach(el => {
        const swp = new Swiper(el.querySelector('.swiper'), {
            slidesPerView: 'auto',
            spaceBetween: 10,
            loop: true,
            navigation: {
                nextEl: el.querySelector('.swp-btn-next'),
                prevEl: el.querySelector('.swp-btn-prev'),
            },
            breakpoints: {
                991: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }
        })
    })
}

const workcards = document.querySelectorAll('.work-card-item');

if (workcards.length) {
    workcards.forEach(el => {
        const swp = new Swiper(el.querySelector('.swiper'), {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: el.querySelector('.swp-btn-next'),
                prevEl: el.querySelector('.swp-btn-prev'),
            }
        })
    })
}

const reviewSwp = new Swiper('.review-swp .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: {
        el: ".review-swp-navigation .swp-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: '.review-swp .swp-btn-next',
        prevEl: '.review-swp .swp-btn-prev',
    },
    breakpoints: {
        991: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
})

const revewCusomNavigation = document.querySelector('.review-swp-navigation .swp-custom-pagination');

if (reviewSwp && revewCusomNavigation) {
    revewCusomNavigation.querySelector('span').textContent = '-' + reviewSwp.slides.length;

    reviewSwp.on('slideChange', function (e) {
        revewCusomNavigation.querySelector('b').textContent = reviewSwp.realIndex + 1;
        revewCusomNavigation.querySelector('span').textContent = '-' + reviewSwp.slides.length;
    })
}

const modal = document.querySelector('.main-modal');
const modalOpen = document.querySelectorAll('.main-modal-open');
const modalBg = document.querySelector('.main-modal-bg');
const modalClose = document.querySelector('.main-modal-close');

if (modalOpen.length) {
    modalOpen.forEach(el => {
        el.onclick = e => {
            e.preventDefault();
            modal.classList.remove('d-none');
            bodyHidden();
        }
    })

    modalBg.onclick = () => {
        modal.classList.add('d-none');
        bodyVisible();
    }

    modalClose.onclick = () => {
        modal.classList.add('d-none');
        bodyVisible();
    }
}

const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuOpen = document.querySelector('.header .bars');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

mobileMenuOpen.onclick = () => {
    mobileMenu.classList.add('d-block');
    bodyHidden();
}

mobileMenuClose.onclick = () => {
    mobileMenu.classList.remove('d-block');
    bodyVisible();
}

const portfolioSwp = document.querySelectorAll('.portfolio-swp');
if (portfolioSwp.length) {
    portfolioSwp.forEach(el => {
        const swp = new Swiper(el.querySelector('.swiper'), {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            navigation: {
                nextEl: el.querySelector('.swp-btn-next'),
                prevEl: el.querySelector('.swp-btn-prev'),
            }
        })
    })
}

const visualizationSwp = new Swiper('.visualization .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.visualization-swp .swp-btn-next',
        prevEl: '.visualization-swp .swp-btn-prev',
    }
});

const houseChildSwp = new Swiper('.house-child', {
    slidesPerView: 5,
    spaceBetween: 20,
})

const houseParentSwp = new Swiper('.house-parent', {
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    navigation: {
        nextEl: '.house .swp-btn-next',
        prevEl: '.house .swp-btn-prev',
    },
    thumbs: {
        swiper: houseChildSwp,
    },
});