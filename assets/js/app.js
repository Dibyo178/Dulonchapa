// preloader 
$(window).on('load', function () {
    if ($('._preloader').length) {
        $('._preloader').delay(100).fadeOut('slow', function () {
            $(this).remove();
        });
    }
});
// end preloader 


// Hide mobile nav when click to link 
const mobileMenuContainer = document.querySelector('.navbar-collapse');
const navLinks = document.querySelectorAll('._nav_li_a');

const isMobileMenuOpen = false;

const closeMobileMenu = () => {
    if (mobileMenuContainer.classList.contains('show')) {
        mobileMenuContainer.classList.remove('show');
    }
}

navLinks.forEach(item => item.addEventListener('click', closeMobileMenu));
// end mobile nav 

// AOS 
AOS.init({
    duration: 1000,
    once: true,
});
// end aos 

// Counter down for discount price 
const discountPrices = document.querySelectorAll('._js_discount_price');
const mainPrices = document.querySelectorAll('._js_main_price');
const showOfferCounterBox = document.querySelector('._show_offer_counter_box');

// Set the date we're counting down to
const offerEndDate = new Date("Feb 28, 2023 12:00:00").getTime();

// Update the count down every 1 second
const offerCounter = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = offerEndDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (showOfferCounterBox) {
        showOfferCounterBox.innerHTML = `<p class='text-center'>Offer will be finished after</p> <h3 class='_hotel_offer_counter'>${days}d ${hours}h ${minutes}m ${seconds}s</h3>`;
    }
    // If the count down is over, write some text  or do something
    if (distance < 0) {
        clearInterval(offerCounter);
        if (showOfferCounterBox) {
            showOfferCounterBox.innerHTML = 'Expired';
            showOfferCounterBox.classList.add('d-none');
        }
    }

    // if offer is running 
    if (distance > 0) {
        if (discountPrices) discountPrices.forEach(item => item.classList.remove('d-none'));
        if (mainPrices) mainPrices.forEach(item => item.classList.add('d-none'));
    }
}, 1000);
// End Counter down for discount price


