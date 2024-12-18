const header = document.querySelector('header')

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

if (companySwpChild) {
    companySwpPrev.onclick = () => {
        companySwpChild.slidePrev();
        companySwpParent.slidePrev();
    }

    companySwpNext.onclick = () => {
        companySwpChild.slideNext();
        companySwpParent.slideNext();
    }
}